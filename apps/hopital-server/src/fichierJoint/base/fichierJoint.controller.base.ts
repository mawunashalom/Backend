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
import { FichierJointService } from "../fichierJoint.service";
import { FichierJointCreateInput } from "./FichierJointCreateInput";
import { FichierJoint } from "./FichierJoint";
import { FichierJointFindManyArgs } from "./FichierJointFindManyArgs";
import { FichierJointWhereUniqueInput } from "./FichierJointWhereUniqueInput";
import { FichierJointUpdateInput } from "./FichierJointUpdateInput";

export class FichierJointControllerBase {
  constructor(protected readonly service: FichierJointService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FichierJoint })
  async createFichierJoint(
    @common.Body() data: FichierJointCreateInput
  ): Promise<FichierJoint> {
    return await this.service.createFichierJoint({
      data: {
        ...data,

        dossier: {
          connect: data.dossier,
        },
      },
      select: {
        dossier: {
          select: {
            id: true,
          },
        },

        id: true,
        nom: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FichierJoint] })
  @ApiNestedQuery(FichierJointFindManyArgs)
  async fichierJoints(@common.Req() request: Request): Promise<FichierJoint[]> {
    const args = plainToClass(FichierJointFindManyArgs, request.query);
    return this.service.fichierJoints({
      ...args,
      select: {
        dossier: {
          select: {
            id: true,
          },
        },

        id: true,
        nom: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FichierJoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fichierJoint(
    @common.Param() params: FichierJointWhereUniqueInput
  ): Promise<FichierJoint | null> {
    const result = await this.service.fichierJoint({
      where: params,
      select: {
        dossier: {
          select: {
            id: true,
          },
        },

        id: true,
        nom: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: FichierJoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFichierJoint(
    @common.Param() params: FichierJointWhereUniqueInput,
    @common.Body() data: FichierJointUpdateInput
  ): Promise<FichierJoint | null> {
    try {
      return await this.service.updateFichierJoint({
        where: params,
        data: {
          ...data,

          dossier: {
            connect: data.dossier,
          },
        },
        select: {
          dossier: {
            select: {
              id: true,
            },
          },

          id: true,
          nom: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: FichierJoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFichierJoint(
    @common.Param() params: FichierJointWhereUniqueInput
  ): Promise<FichierJoint | null> {
    try {
      return await this.service.deleteFichierJoint({
        where: params,
        select: {
          dossier: {
            select: {
              id: true,
            },
          },

          id: true,
          nom: true,
          url: true,
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
