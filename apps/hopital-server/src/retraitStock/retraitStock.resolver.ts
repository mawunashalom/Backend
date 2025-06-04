import * as graphql from "@nestjs/graphql";
import { RetraitStockResolverBase } from "./base/retraitStock.resolver.base";
import { RetraitStock } from "./base/RetraitStock";
import { RetraitStockService } from "./retraitStock.service";

@graphql.Resolver(() => RetraitStock)
export class RetraitStockResolver extends RetraitStockResolverBase {
  constructor(protected readonly service: RetraitStockService) {
    super(service);
  }
}
