import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LigneOrdonnanceServiceBase } from "./base/ligneOrdonnance.service.base";

@Injectable()
export class LigneOrdonnanceService extends LigneOrdonnanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
