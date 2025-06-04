import { Module } from "@nestjs/common";
import { HopitalModuleBase } from "./base/hopital.module.base";
import { HopitalService } from "./hopital.service";
import { HopitalController } from "./hopital.controller";
import { HopitalResolver } from "./hopital.resolver";

@Module({
  imports: [HopitalModuleBase],
  controllers: [HopitalController],
  providers: [HopitalService, HopitalResolver],
  exports: [HopitalService],
})
export class HopitalModule {}
