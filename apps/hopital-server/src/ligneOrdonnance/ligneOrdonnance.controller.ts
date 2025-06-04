import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LigneOrdonnanceService } from "./ligneOrdonnance.service";
import { LigneOrdonnanceControllerBase } from "./base/ligneOrdonnance.controller.base";

@swagger.ApiTags("ligneOrdonnances")
@common.Controller("ligneOrdonnances")
export class LigneOrdonnanceController extends LigneOrdonnanceControllerBase {
  constructor(protected readonly service: LigneOrdonnanceService) {
    super(service);
  }
}
