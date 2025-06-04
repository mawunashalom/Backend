import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepenseServiceBase } from "./base/depense.service.base";

@Injectable()
export class DepenseService extends DepenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
