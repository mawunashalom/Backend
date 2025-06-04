import * as graphql from "@nestjs/graphql";
import { OrdonnanceResolverBase } from "./base/ordonnance.resolver.base";
import { Ordonnance } from "./base/Ordonnance";
import { OrdonnanceService } from "./ordonnance.service";

@graphql.Resolver(() => Ordonnance)
export class OrdonnanceResolver extends OrdonnanceResolverBase {
  constructor(protected readonly service: OrdonnanceService) {
    super(service);
  }
}
