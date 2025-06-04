import { Module } from "@nestjs/common";
import { DepenseModuleBase } from "./base/depense.module.base";
import { DepenseService } from "./depense.service";
import { DepenseController } from "./depense.controller";
import { DepenseResolver } from "./depense.resolver";

@Module({
  imports: [DepenseModuleBase],
  controllers: [DepenseController],
  providers: [DepenseService, DepenseResolver],
  exports: [DepenseService],
})
export class DepenseModule {}
