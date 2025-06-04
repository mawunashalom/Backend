import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UtilisateurService } from "./utilisateur.service";
import { UtilisateurControllerBase } from "./base/utilisateur.controller.base";

@swagger.ApiTags("utilisateurs")
@common.Controller("utilisateurs")
export class UtilisateurController extends UtilisateurControllerBase {
  constructor(protected readonly service: UtilisateurService) {
    super(service);
  }
}
