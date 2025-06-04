import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DossierMedicalService } from "./dossierMedical.service";
import { DossierMedicalControllerBase } from "./base/dossierMedical.controller.base";

@swagger.ApiTags("dossierMedicals")
@common.Controller("dossierMedicals")
export class DossierMedicalController extends DossierMedicalControllerBase {
  constructor(protected readonly service: DossierMedicalService) {
    super(service);
  }
}
