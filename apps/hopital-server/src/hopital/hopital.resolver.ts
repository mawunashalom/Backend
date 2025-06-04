import * as graphql from "@nestjs/graphql";
import { HopitalResolverBase } from "./base/hopital.resolver.base";
import { Hopital } from "./base/Hopital";
import { HopitalService } from "./hopital.service";

@graphql.Resolver(() => Hopital)
export class HopitalResolver extends HopitalResolverBase {
  constructor(protected readonly service: HopitalService) {
    super(service);
  }
}
