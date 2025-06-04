import { Module } from "@nestjs/common";
import { HistoriqueActionModuleBase } from "./base/historiqueAction.module.base";
import { HistoriqueActionService } from "./historiqueAction.service";
import { HistoriqueActionController } from "./historiqueAction.controller";
import { HistoriqueActionResolver } from "./historiqueAction.resolver";

@Module({
  imports: [HistoriqueActionModuleBase],
  controllers: [HistoriqueActionController],
  providers: [HistoriqueActionService, HistoriqueActionResolver],
  exports: [HistoriqueActionService],
})
export class HistoriqueActionModule {}
