import * as graphql from "@nestjs/graphql";
import { UtilisateurResolverBase } from "./base/utilisateur.resolver.base";
import { Utilisateur } from "./base/Utilisateur";
import { UtilisateurService } from "./utilisateur.service";

@graphql.Resolver(() => Utilisateur)
export class UtilisateurResolver extends UtilisateurResolverBase {
  constructor(protected readonly service: UtilisateurService) {
    super(service);
  }
}
