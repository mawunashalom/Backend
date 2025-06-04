import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdonnanceService } from "./ordonnance.service";
import { OrdonnanceControllerBase } from "./base/ordonnance.controller.base";

@swagger.ApiTags("ordonnances")
@common.Controller("ordonnances")
export class OrdonnanceController extends OrdonnanceControllerBase {
  constructor(protected readonly service: OrdonnanceService) {
    super(service);
  }
}
