import * as graphql from "@nestjs/graphql";
import { DgtcpResolverBase } from "./base/dgtcp.resolver.base";
import { Dgtcp } from "./base/Dgtcp";
import { DgtcpService } from "./dgtcp.service";

@graphql.Resolver(() => Dgtcp)
export class DgtcpResolver extends DgtcpResolverBase {
  constructor(protected readonly service: DgtcpService) {
    super(service);
  }
}
