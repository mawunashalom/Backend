import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeService } from "./employe.service";
import { EmployeControllerBase } from "./base/employe.controller.base";

@swagger.ApiTags("employes")
@common.Controller("employes")
export class EmployeController extends EmployeControllerBase {
  constructor(protected readonly service: EmployeService) {
    super(service);
  }
}
