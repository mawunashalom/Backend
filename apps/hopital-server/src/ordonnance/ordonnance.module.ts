import { Module } from "@nestjs/common";
import { OrdonnanceModuleBase } from "./base/ordonnance.module.base";
import { OrdonnanceService } from "./ordonnance.service";
import { OrdonnanceController } from "./ordonnance.controller";
import { OrdonnanceResolver } from "./ordonnance.resolver";

@Module({
  imports: [OrdonnanceModuleBase],
  controllers: [OrdonnanceController],
  providers: [OrdonnanceService, OrdonnanceResolver],
  exports: [OrdonnanceService],
})
export class OrdonnanceModule {}
