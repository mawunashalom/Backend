import { Module } from "@nestjs/common";
import { MedicamentModuleBase } from "./base/medicament.module.base";
import { MedicamentService } from "./medicament.service";
import { MedicamentController } from "./medicament.controller";
import { MedicamentResolver } from "./medicament.resolver";

@Module({
  imports: [MedicamentModuleBase],
  controllers: [MedicamentController],
  providers: [MedicamentService, MedicamentResolver],
  exports: [MedicamentService],
})
export class MedicamentModule {}
