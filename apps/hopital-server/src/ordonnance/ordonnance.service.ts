import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdonnanceServiceBase } from "./base/ordonnance.service.base";

@Injectable()
export class OrdonnanceService extends OrdonnanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
