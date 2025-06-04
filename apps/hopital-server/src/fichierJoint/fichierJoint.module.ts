import { Module } from "@nestjs/common";
import { FichierJointModuleBase } from "./base/fichierJoint.module.base";
import { FichierJointService } from "./fichierJoint.service";
import { FichierJointController } from "./fichierJoint.controller";
import { FichierJointResolver } from "./fichierJoint.resolver";

@Module({
  imports: [FichierJointModuleBase],
  controllers: [FichierJointController],
  providers: [FichierJointService, FichierJointResolver],
  exports: [FichierJointService],
})
export class FichierJointModule {}
