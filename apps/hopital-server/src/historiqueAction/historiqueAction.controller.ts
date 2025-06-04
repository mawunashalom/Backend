import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HistoriqueActionService } from "./historiqueAction.service";
import { HistoriqueActionControllerBase } from "./base/historiqueAction.controller.base";

@swagger.ApiTags("historiqueActions")
@common.Controller("historiqueActions")
export class HistoriqueActionController extends HistoriqueActionControllerBase {
  constructor(protected readonly service: HistoriqueActionService) {
    super(service);
  }
}
