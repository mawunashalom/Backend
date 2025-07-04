/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  LigneOrdonnance as PrismaLigneOrdonnance,
  Medicament as PrismaMedicament,
  Ordonnance as PrismaOrdonnance,
} from "@prisma/client";

export class LigneOrdonnanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LigneOrdonnanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ligneOrdonnance.count(args);
  }

  async ligneOrdonnances(
    args: Prisma.LigneOrdonnanceFindManyArgs
  ): Promise<PrismaLigneOrdonnance[]> {
    return this.prisma.ligneOrdonnance.findMany(args);
  }
  async ligneOrdonnance(
    args: Prisma.LigneOrdonnanceFindUniqueArgs
  ): Promise<PrismaLigneOrdonnance | null> {
    return this.prisma.ligneOrdonnance.findUnique(args);
  }
  async createLigneOrdonnance(
    args: Prisma.LigneOrdonnanceCreateArgs
  ): Promise<PrismaLigneOrdonnance> {
    return this.prisma.ligneOrdonnance.create(args);
  }
  async updateLigneOrdonnance(
    args: Prisma.LigneOrdonnanceUpdateArgs
  ): Promise<PrismaLigneOrdonnance> {
    return this.prisma.ligneOrdonnance.update(args);
  }
  async deleteLigneOrdonnance(
    args: Prisma.LigneOrdonnanceDeleteArgs
  ): Promise<PrismaLigneOrdonnance> {
    return this.prisma.ligneOrdonnance.delete(args);
  }

  async getMedicament(parentId: number): Promise<PrismaMedicament | null> {
    return this.prisma.ligneOrdonnance
      .findUnique({
        where: { id: parentId },
      })
      .medicament();
  }

  async getOrdonnance(parentId: number): Promise<PrismaOrdonnance | null> {
    return this.prisma.ligneOrdonnance
      .findUnique({
        where: { id: parentId },
      })
      .ordonnance();
  }
}
