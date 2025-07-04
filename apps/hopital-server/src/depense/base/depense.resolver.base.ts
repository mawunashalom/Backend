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
import { Depense } from "./Depense";
import { DepenseCountArgs } from "./DepenseCountArgs";
import { DepenseFindManyArgs } from "./DepenseFindManyArgs";
import { DepenseFindUniqueArgs } from "./DepenseFindUniqueArgs";
import { CreateDepenseArgs } from "./CreateDepenseArgs";
import { UpdateDepenseArgs } from "./UpdateDepenseArgs";
import { DeleteDepenseArgs } from "./DeleteDepenseArgs";
import { Hopital } from "../../hopital/base/Hopital";
import { Utilisateur } from "../../utilisateur/base/Utilisateur";
import { DepenseService } from "../depense.service";
@graphql.Resolver(() => Depense)
export class DepenseResolverBase {
  constructor(protected readonly service: DepenseService) {}

  async _depensesMeta(
    @graphql.Args() args: DepenseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Depense])
  async depenses(
    @graphql.Args() args: DepenseFindManyArgs
  ): Promise<Depense[]> {
    return this.service.depenses(args);
  }

  @graphql.Query(() => Depense, { nullable: true })
  async depense(
    @graphql.Args() args: DepenseFindUniqueArgs
  ): Promise<Depense | null> {
    const result = await this.service.depense(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Depense)
  async createDepense(
    @graphql.Args() args: CreateDepenseArgs
  ): Promise<Depense> {
    return await this.service.createDepense({
      ...args,
      data: {
        ...args.data,

        hopital: {
          connect: args.data.hopital,
        },

        utilisateur: {
          connect: args.data.utilisateur,
        },
      },
    });
  }

  @graphql.Mutation(() => Depense)
  async updateDepense(
    @graphql.Args() args: UpdateDepenseArgs
  ): Promise<Depense | null> {
    try {
      return await this.service.updateDepense({
        ...args,
        data: {
          ...args.data,

          hopital: {
            connect: args.data.hopital,
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

  @graphql.Mutation(() => Depense)
  async deleteDepense(
    @graphql.Args() args: DeleteDepenseArgs
  ): Promise<Depense | null> {
    try {
      return await this.service.deleteDepense(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Hopital, {
    nullable: true,
    name: "hopital",
  })
  async getHopital(@graphql.Parent() parent: Depense): Promise<Hopital | null> {
    const result = await this.service.getHopital(parent.id);

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
    @graphql.Parent() parent: Depense
  ): Promise<Utilisateur | null> {
    const result = await this.service.getUtilisateur(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
