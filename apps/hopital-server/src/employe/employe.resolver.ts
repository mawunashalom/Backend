import * as graphql from "@nestjs/graphql";
import { EmployeResolverBase } from "./base/employe.resolver.base";
import { Employe } from "./base/Employe";
import { EmployeService } from "./employe.service";

@graphql.Resolver(() => Employe)
export class EmployeResolver extends EmployeResolverBase {
  constructor(protected readonly service: EmployeService) {
    super(service);
  }
}
