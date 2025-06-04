import * as graphql from "@nestjs/graphql";
import { DossierMedicalResolverBase } from "./base/dossierMedical.resolver.base";
import { DossierMedical } from "./base/DossierMedical";
import { DossierMedicalService } from "./dossierMedical.service";

@graphql.Resolver(() => DossierMedical)
export class DossierMedicalResolver extends DossierMedicalResolverBase {
  constructor(protected readonly service: DossierMedicalService) {
    super(service);
  }
}
