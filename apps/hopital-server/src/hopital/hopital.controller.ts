import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HopitalService } from "./hopital.service";
import { HopitalControllerBase } from "./base/hopital.controller.base";

@swagger.ApiTags("hopitals")
@common.Controller("hopitals")
export class HopitalController extends HopitalControllerBase {
  constructor(protected readonly service: HopitalService) {
    super(service);
  }
}
