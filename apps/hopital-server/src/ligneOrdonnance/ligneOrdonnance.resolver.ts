import * as graphql from "@nestjs/graphql";
import { LigneOrdonnanceResolverBase } from "./base/ligneOrdonnance.resolver.base";
import { LigneOrdonnance } from "./base/LigneOrdonnance";
import { LigneOrdonnanceService } from "./ligneOrdonnance.service";

@graphql.Resolver(() => LigneOrdonnance)
export class LigneOrdonnanceResolver extends LigneOrdonnanceResolverBase {
  constructor(protected readonly service: LigneOrdonnanceService) {
    super(service);
  }
}
