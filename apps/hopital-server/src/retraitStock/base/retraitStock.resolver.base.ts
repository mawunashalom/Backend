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
import { RetraitStock } from "./RetraitStock";
import { RetraitStockCountArgs } from "./RetraitStockCountArgs";
import { RetraitStockFindManyArgs } from "./RetraitStockFindManyArgs";
import { RetraitStockFindUniqueArgs } from "./RetraitStockFindUniqueArgs";
import { CreateRetraitStockArgs } from "./CreateRetraitStockArgs";
import { UpdateRetraitStockArgs } from "./UpdateRetraitStockArgs";
import { DeleteRetraitStockArgs } from "./DeleteRetraitStockArgs";
import { Medicament } from "../../medicament/base/Medicament";
import { Utilisateur } from "../../utilisateur/base/Utilisateur";
import { RetraitStockService } from "../retraitStock.service";
@graphql.Resolver(() => RetraitStock)
export class RetraitStockResolverBase {
  constructor(protected readonly service: RetraitStockService) {}

  async _retraitStocksMeta(
    @graphql.Args() args: RetraitStockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RetraitStock])
  async retraitStocks(
    @graphql.Args() args: RetraitStockFindManyArgs
  ): Promise<RetraitStock[]> {
    return this.service.retraitStocks(args);
  }

  @graphql.Query(() => RetraitStock, { nullable: true })
  async retraitStock(
    @graphql.Args() args: RetraitStockFindUniqueArgs
  ): Promise<RetraitStock | null> {
    const result = await this.service.retraitStock(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RetraitStock)
  async createRetraitStock(
    @graphql.Args() args: CreateRetraitStockArgs
  ): Promise<RetraitStock> {
    return await this.service.createRetraitStock({
      ...args,
      data: {
        ...args.data,

        medicament: {
          connect: args.data.medicament,
        },

        utilisateur: {
          connect: args.data.utilisateur,
        },
      },
    });
  }

  @graphql.Mutation(() => RetraitStock)
  async updateRetraitStock(
    @graphql.Args() args: UpdateRetraitStockArgs
  ): Promise<RetraitStock | null> {
    try {
      return await this.service.updateRetraitStock({
        ...args,
        data: {
          ...args.data,

          medicament: {
            connect: args.data.medicament,
          },

          utilisateur: {
            connect: args.data.utilisateur,
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

  @graphql.Mutation(() => RetraitStock)
  async deleteRetraitStock(
    @graphql.Args() args: DeleteRetraitStockArgs
  ): Promise<RetraitStock | null> {
    try {
      return await this.service.deleteRetraitStock(args);
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
    @graphql.Parent() parent: RetraitStock
  ): Promise<Medicament | null> {
    const result = await this.service.getMedicament(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Utilisateur, {
    nullable: true,
    name: "utilisateur",
  })
  async getUtilisateur(
    @graphql.Parent() parent: RetraitStock
  ): Promise<Utilisateur | null> {
    const result = await this.service.getUtilisateur(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
