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
import { LigneOrdonnanceService } from "../ligneOrdonnance.service";
import { LigneOrdonnanceCreateInput } from "./LigneOrdonnanceCreateInput";
import { LigneOrdonnance } from "./LigneOrdonnance";
import { LigneOrdonnanceFindManyArgs } from "./LigneOrdonnanceFindManyArgs";
import { LigneOrdonnanceWhereUniqueInput } from "./LigneOrdonnanceWhereUniqueInput";
import { LigneOrdonnanceUpdateInput } from "./LigneOrdonnanceUpdateInput";

export class LigneOrdonnanceControllerBase {
  constructor(protected readonly service: LigneOrdonnanceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LigneOrdonnance })
  async createLigneOrdonnance(
    @common.Body() data: LigneOrdonnanceCreateInput
  ): Promise<LigneOrdonnance> {
    return await this.service.createLigneOrdonnance({
      data: {
        ...data,

        medicament: {
          connect: data.medicament,
        },

        ordonnance: {
          connect: data.ordonnance,
        },
      },
      select: {
        id: true,

        medicament: {
          select: {
            id: true,
          },
        },

        ordonnance: {
          select: {
            id: true,
          },
        },

        quantite: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LigneOrdonnance] })
  @ApiNestedQuery(LigneOrdonnanceFindManyArgs)
  async ligneOrdonnances(
    @common.Req() request: Request
  ): Promise<LigneOrdonnance[]> {
    const args = plainToClass(LigneOrdonnanceFindManyArgs, request.query);
    return this.service.ligneOrdonnances({
      ...args,
      select: {
        id: true,

        medicament: {
          select: {
            id: true,
          },
        },

        ordonnance: {
          select: {
            id: true,
          },
        },

        quantite: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LigneOrdonnance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ligneOrdonnance(
    @common.Param() params: LigneOrdonnanceWhereUniqueInput
  ): Promise<LigneOrdonnance | null> {
    const result = await this.service.ligneOrdonnance({
      where: params,
      select: {
        id: true,

        medicament: {
          select: {
            id: true,
          },
        },

        ordonnance: {
          select: {
            id: true,
          },
        },

        quantite: true,
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
  @swagger.ApiOkResponse({ type: LigneOrdonnance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLigneOrdonnance(
    @common.Param() params: LigneOrdonnanceWhereUniqueInput,
    @common.Body() data: LigneOrdonnanceUpdateInput
  ): Promise<LigneOrdonnance | null> {
    try {
      return await this.service.updateLigneOrdonnance({
        where: params,
        data: {
          ...data,

          medicament: {
            connect: data.medicament,
          },

          ordonnance: {
            connect: data.ordonnance,
          },
        },
        select: {
          id: true,

          medicament: {
            select: {
              id: true,
            },
          },

          ordonnance: {
            select: {
              id: true,
            },
          },

          quantite: true,
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
  @swagger.ApiOkResponse({ type: LigneOrdonnance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLigneOrdonnance(
    @common.Param() params: LigneOrdonnanceWhereUniqueInput
  ): Promise<LigneOrdonnance | null> {
    try {
      return await this.service.deleteLigneOrdonnance({
        where: params,
        select: {
          id: true,

          medicament: {
            select: {
              id: true,
            },
          },

          ordonnance: {
            select: {
              id: true,
            },
          },

          quantite: true,
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
