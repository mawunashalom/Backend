import { Module } from "@nestjs/common";
import { LigneOrdonnanceModuleBase } from "./base/ligneOrdonnance.module.base";
import { LigneOrdonnanceService } from "./ligneOrdonnance.service";
import { LigneOrdonnanceController } from "./ligneOrdonnance.controller";
import { LigneOrdonnanceResolver } from "./ligneOrdonnance.resolver";

@Module({
  imports: [LigneOrdonnanceModuleBase],
  controllers: [LigneOrdonnanceController],
  providers: [LigneOrdonnanceService, LigneOrdonnanceResolver],
  exports: [LigneOrdonnanceService],
})
export class LigneOrdonnanceModule {}
