import * as graphql from "@nestjs/graphql";
import { HistoriqueActionResolverBase } from "./base/historiqueAction.resolver.base";
import { HistoriqueAction } from "./base/HistoriqueAction";
import { HistoriqueActionService } from "./historiqueAction.service";

@graphql.Resolver(() => HistoriqueAction)
export class HistoriqueActionResolver extends HistoriqueActionResolverBase {
  constructor(protected readonly service: HistoriqueActionService) {
    super(service);
  }
}
