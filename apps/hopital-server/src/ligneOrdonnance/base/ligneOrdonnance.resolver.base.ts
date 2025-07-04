/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LigneOrdonnance } from "./LigneOrdonnance";
import { LigneOrdonnanceCountArgs } from "./LigneOrdonnanceCountArgs";
import { LigneOrdonnanceFindManyArgs } from "./LigneOrdonnanceFindManyArgs";
import { LigneOrdonnanceFindUniqueArgs } from "./LigneOrdonnanceFindUniqueArgs";
import { CreateLigneOrdonnanceArgs } from "./CreateLigneOrdonnanceArgs";
import { UpdateLigneOrdonnanceArgs } from "./UpdateLigneOrdonnanceArgs";
import { DeleteLigneOrdonnanceArgs } from "./DeleteLigneOrdonnanceArgs";
import { Medicament } from "../../medicament/base/Medicament";
import { Ordonnance } from "../../ordonnance/base/Ordonnance";
import { LigneOrdonnanceService } from "../ligneOrdonnance.service";
@graphql.Resolver(() => LigneOrdonnance)
export class LigneOrdonnanceResolverBase {
  constructor(protected readonly service: LigneOrdonnanceService) {}

  async _ligneOrdonnancesMeta(
    @graphql.Args() args: LigneOrdonnanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LigneOrdonnance])
  async ligneOrdonnances(
    @graphql.Args() args: LigneOrdonnanceFindManyArgs
  ): Promise<LigneOrdonnance[]> {
    return this.service.ligneOrdonnances(args);
  }

  @graphql.Query(() => LigneOrdonnance, { nullable: true })
  async ligneOrdonnance(
    @graphql.Args() args: LigneOrdonnanceFindUniqueArgs
  ): Promise<LigneOrdonnance | null> {
    const result = await this.service.ligneOrdonnance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LigneOrdonnance)
  async createLigneOrdonnance(
    @graphql.Args() args: CreateLigneOrdonnanceArgs
  ): Promise<LigneOrdonnance> {
    return await this.service.createLigneOrdonnance({
      ...args,
      data: {
        ...args.data,

        medicament: {
          connect: args.data.medicament,
        },

        ordonnance: {
          connect: args.data.ordonnance,
        },
      },
    });
  }

  @graphql.Mutation(() => LigneOrdonnance)
  async updateLigneOrdonnance(
    @graphql.Args() args: UpdateLigneOrdonnanceArgs
  ): Promise<LigneOrdonnance | null> {
    try {
      return await this.service.updateLigneOrdonnance({
        ...args,
        data: {
          ...args.data,

          medicament: {
            connect: args.data.medicament,
          },

          ordonnance: {
            connect: args.data.ordonnance,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LigneOrdonnance)
  async deleteLigneOrdonnance(
    @graphql.Args() args: DeleteLigneOrdonnanceArgs
  ): Promise<LigneOrdonnance | null> {
    try {
      return await this.service.deleteLigneOrdonnance(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Medicament, {
    nullable: true,
    name: "medicament",
  })
  async getMedicament(
    @graphql.Parent() parent: LigneOrdonnance
  ): Promise<Medicament | null> {
    const result = await this.service.getMedicament(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Ordonnance, {
    nullable: true,
    name: "ordonnance",
  })
  async getOrdonnance(
    @graphql.Parent() parent: LigneOrdonnance
  ): Promise<Ordonnance | null> {
    const result = await this.service.getOrdonnance(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
