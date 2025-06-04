import { Module } from "@nestjs/common";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { EmployeModule } from "./employe/employe.module";
import { HopitalModule } from "./hopital/hopital.module";
import { HistoriqueActionModule } from "./historiqueAction/historiqueAction.module";
import { DgtcpModule } from "./dgtcp/dgtcp.module";
import { PatientModule } from "./patient/patient.module";
import { RendezVousModule } from "./rendezVous/rendezVous.module";
import { DossierMedicalModule } from "./dossierMedical/dossierMedical.module";
import { FichierJointModule } from "./fichierJoint/fichierJoint.module";
import { OrdonnanceModule } from "./ordonnance/ordonnance.module";
import { LigneOrdonnanceModule } from "./ligneOrdonnance/ligneOrdonnance.module";
import { MedicamentModule } from "./medicament/medicament.module";
import { RetraitStockModule } from "./retraitStock/retraitStock.module";
import { DepenseModule } from "./depense/depense.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UtilisateurModule,
    EmployeModule,
    HopitalModule,
    HistoriqueActionModule,
    DgtcpModule,
    PatientModule,
    RendezVousModule,
    DossierMedicalModule,
    FichierJointModule,
    OrdonnanceModule,
    LigneOrdonnanceModule,
    MedicamentModule,
    RetraitStockModule,
    DepenseModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
