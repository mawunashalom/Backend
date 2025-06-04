import { Module } from "@nestjs/common";
import { EmployeModuleBase } from "./base/employe.module.base";
import { EmployeService } from "./employe.service";
import { EmployeController } from "./employe.controller";
import { EmployeResolver } from "./employe.resolver";

@Module({
  imports: [EmployeModuleBase],
  controllers: [EmployeController],
  providers: [EmployeService, EmployeResolver],
  exports: [EmployeService],
})
export class EmployeModule {}
