import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RendezVousService } from "./rendezVous.service";
import { RendezVousControllerBase } from "./base/rendezVous.controller.base";

@swagger.ApiTags("rendezVous")
@common.Controller("rendezVous")
export class RendezVousController extends RendezVousControllerBase {
  constructor(protected readonly service: RendezVousService) {
    super(service);
  }
}
