import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepenseService } from "./depense.service";
import { DepenseControllerBase } from "./base/depense.controller.base";

@swagger.ApiTags("depenses")
@common.Controller("depenses")
export class DepenseController extends DepenseControllerBase {
  constructor(protected readonly service: DepenseService) {
    super(service);
  }
}
