import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DossierMedicalServiceBase } from "./base/dossierMedical.service.base";

@Injectable()
export class DossierMedicalService extends DossierMedicalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
