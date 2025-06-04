import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetraitStockServiceBase } from "./base/retraitStock.service.base";

@Injectable()
export class RetraitStockService extends RetraitStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
