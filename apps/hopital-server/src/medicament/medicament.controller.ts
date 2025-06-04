import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MedicamentService } from "./medicament.service";
import { MedicamentControllerBase } from "./base/medicament.controller.base";

@swagger.ApiTags("medicaments")
@common.Controller("medicaments")
export class MedicamentController extends MedicamentControllerBase {
  constructor(protected readonly service: MedicamentService) {
    super(service);
  }
}
