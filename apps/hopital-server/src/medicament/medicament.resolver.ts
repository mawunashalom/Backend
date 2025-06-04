import * as graphql from "@nestjs/graphql";
import { MedicamentResolverBase } from "./base/medicament.resolver.base";
import { Medicament } from "./base/Medicament";
import { MedicamentService } from "./medicament.service";

@graphql.Resolver(() => Medicament)
export class MedicamentResolver extends MedicamentResolverBase {
  constructor(protected readonly service: MedicamentService) {
    super(service);
  }
}
