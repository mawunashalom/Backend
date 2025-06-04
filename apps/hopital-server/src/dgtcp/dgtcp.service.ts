import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DgtcpServiceBase } from "./base/dgtcp.service.base";

@Injectable()
export class DgtcpService extends DgtcpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
