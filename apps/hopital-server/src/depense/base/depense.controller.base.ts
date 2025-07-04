/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DepenseService } from "../depense.service";
import { DepenseCreateInput } from "./DepenseCreateInput";
import { Depense } from "./Depense";
import { DepenseFindManyArgs } from "./DepenseFindManyArgs";
import { DepenseWhereUniqueInput } from "./DepenseWhereUniqueInput";
import { DepenseUpdateInput } from "./DepenseUpdateInput";

export class DepenseControllerBase {
  constructor(protected readonly service: DepenseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Depense })
  async createDepense(
    @common.Body() data: DepenseCreateInput
  ): Promise<Depense> {
    return await this.service.createDepense({
      data: {
        ...data,

        hopital: {
          connect: data.hopital,
        },

        utilisateur: {
          connect: data.utilisateur,
        },
      },
      select: {
        date: true,

        hopital: {
          select: {
            id: true,
          },
        },

        id: true,
        montant: true,
        motif: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Depense] })
  @ApiNestedQuery(DepenseFindManyArgs)
  async depenses(@common.Req() request: Request): Promise<Depense[]> {
    const args = plainToClass(DepenseFindManyArgs, request.query);
    return this.service.depenses({
      ...args,
      select: {
        date: true,

        hopital: {
          select: {
            id: true,
          },
        },

        id: true,
        montant: true,
        motif: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Depense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async depense(
    @common.Param() params: DepenseWhereUniqueInput
  ): Promise<Depense | null> {
    const result = await this.service.depense({
      where: params,
      select: {
        date: true,

        hopital: {
          select: {
            id: true,
          },
        },

        id: true,
        montant: true,
        motif: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Depense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDepense(
    @common.Param() params: DepenseWhereUniqueInput,
    @common.Body() data: DepenseUpdateInput
  ): Promise<Depense | null> {
    try {
      return await this.service.updateDepense({
        where: params,
        data: {
          ...data,

          hopital: {
            connect: data.hopital,
          },

          utilisateur: {
            connect: data.utilisateur,
          },
        },
        select: {
          date: true,

          hopital: {
            select: {
              id: true,
            },
          },

          id: true,
          montant: true,
          motif: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Depense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDepense(
    @common.Param() params: DepenseWhereUniqueInput
  ): Promise<Depense | null> {
    try {
      return await this.service.deleteDepense({
        where: params,
        select: {
          date: true,

          hopital: {
            select: {
              id: true,
            },
          },

          id: true,
          montant: true,
          motif: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
