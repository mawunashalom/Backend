import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeServiceBase } from "./base/employe.service.base";

@Injectable()
export class EmployeService extends EmployeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
