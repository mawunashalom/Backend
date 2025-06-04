import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RendezVousServiceBase } from "./base/rendezVous.service.base";

@Injectable()
export class RendezVousService extends RendezVousServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
