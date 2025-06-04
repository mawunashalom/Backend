import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FichierJointService } from "./fichierJoint.service";
import { FichierJointControllerBase } from "./base/fichierJoint.controller.base";

@swagger.ApiTags("fichierJoints")
@common.Controller("fichierJoints")
export class FichierJointController extends FichierJointControllerBase {
  constructor(protected readonly service: FichierJointService) {
    super(service);
  }
}
