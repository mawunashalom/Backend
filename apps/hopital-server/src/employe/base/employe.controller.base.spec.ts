import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EmployeController } from "../employe.controller";
import { EmployeService } from "../employe.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adresse: "exampleAdresse",
  agents: "exampleAgents",
  contactUrgence: "exampleContactUrgence",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  poste: "examplePoste",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adresse: "exampleAdresse",
  agents: "exampleAgents",
  contactUrgence: "exampleContactUrgence",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  poste: "examplePoste",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adresse: "exampleAdresse",
    agents: "exampleAgents",
    contactUrgence: "exampleContactUrgence",
    createdAt: new Date(),
    email: "exampleEmail",
    id: 42,
    nom: "exampleNom",
    poste: "examplePoste",
    prenom: "examplePrenom",
    telephone: "exampleTelephone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adresse: "exampleAdresse",
  agents: "exampleAgents",
  contactUrgence: "exampleContactUrgence",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  poste: "examplePoste",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};

const service = {
  createEmploye() {
    return CREATE_RESULT;
  },
  employes: () => FIND_MANY_RESULT,
  employe: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Employe", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeService,
          useValue: service,
        },
      ],
      controllers: [EmployeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /employes", async () => {
    await request(app.getHttpServer())
      .post("/employes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employes", async () => {
    await request(app.getHttpServer())
      .get("/employes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
