import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FichierJointServiceBase } from "./base/fichierJoint.service.base";

@Injectable()
export class FichierJointService extends FichierJointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
