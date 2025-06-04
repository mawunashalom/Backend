import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicamentServiceBase } from "./base/medicament.service.base";

@Injectable()
export class MedicamentService extends MedicamentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
