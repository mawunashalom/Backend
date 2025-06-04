import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HopitalServiceBase } from "./base/hopital.service.base";

@Injectable()
export class HopitalService extends HopitalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
