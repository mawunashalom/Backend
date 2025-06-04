import * as graphql from "@nestjs/graphql";
import { DepenseResolverBase } from "./base/depense.resolver.base";
import { Depense } from "./base/Depense";
import { DepenseService } from "./depense.service";

@graphql.Resolver(() => Depense)
export class DepenseResolver extends DepenseResolverBase {
  constructor(protected readonly service: DepenseService) {
    super(service);
  }
}
