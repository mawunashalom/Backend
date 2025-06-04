import * as graphql from "@nestjs/graphql";
import { FichierJointResolverBase } from "./base/fichierJoint.resolver.base";
import { FichierJoint } from "./base/FichierJoint";
import { FichierJointService } from "./fichierJoint.service";

@graphql.Resolver(() => FichierJoint)
export class FichierJointResolver extends FichierJointResolverBase {
  constructor(protected readonly service: FichierJointService) {
    super(service);
  }
}
