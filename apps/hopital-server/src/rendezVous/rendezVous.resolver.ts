import * as graphql from "@nestjs/graphql";
import { RendezVousResolverBase } from "./base/rendezVous.resolver.base";
import { RendezVous } from "./base/RendezVous";
import { RendezVousService } from "./rendezVous.service";

@graphql.Resolver(() => RendezVous)
export class RendezVousResolver extends RendezVousResolverBase {
  constructor(protected readonly service: RendezVousService) {
    super(service);
  }
}
