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
import { PatientController } from "../patient.controller";
import { PatientService } from "../patient.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  dateNaissance: new Date(),
  id: 42,
  nom: "exampleNom",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  dateNaissance: new Date(),
  id: 42,
  nom: "exampleNom",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adresse: "exampleAdresse",
    createdAt: new Date(),
    dateNaissance: new Date(),
    id: 42,
    nom: "exampleNom",
    prenom: "examplePrenom",
    telephone: "exampleTelephone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  dateNaissance: new Date(),
  id: 42,
  nom: "exampleNom",
  prenom: "examplePrenom",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};

const service = {
  createPatient() {
    return CREATE_RESULT;
  },
  patients: () => FIND_MANY_RESULT,
  patient: ({ where }: { where: { id: string } }) => {
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

describe("Patient", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PatientService,
          useValue: service,
        },
      ],
      controllers: [PatientController],
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

  test("POST /patients", async () => {
    await request(app.getHttpServer())
      .post("/patients")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateNaissance: CREATE_RESULT.dateNaissance.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /patients", async () => {
    await request(app.getHttpServer())
      .get("/patients")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateNaissance: FIND_MANY_RESULT[0].dateNaissance.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /patients/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patients"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /patients/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patients"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateNaissance: FIND_ONE_RESULT.dateNaissance.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /patients existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/patients")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateNaissance: CREATE_RESULT.dateNaissance.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/patients")
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
