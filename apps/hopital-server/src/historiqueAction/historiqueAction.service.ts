import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HistoriqueActionServiceBase } from "./base/historiqueAction.service.base";

@Injectable()
export class HistoriqueActionService extends HistoriqueActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
