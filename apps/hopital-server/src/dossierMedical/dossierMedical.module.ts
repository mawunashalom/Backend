import { Module } from "@nestjs/common";
import { DossierMedicalModuleBase } from "./base/dossierMedical.module.base";
import { DossierMedicalService } from "./dossierMedical.service";
import { DossierMedicalController } from "./dossierMedical.controller";
import { DossierMedicalResolver } from "./dossierMedical.resolver";

@Module({
  imports: [DossierMedicalModuleBase],
  controllers: [DossierMedicalController],
  providers: [DossierMedicalService, DossierMedicalResolver],
  exports: [DossierMedicalService],
})
export class DossierMedicalModule {}
