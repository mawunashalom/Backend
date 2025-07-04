/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FichierJointWhereInput } from "./FichierJointWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FichierJointOrderByInput } from "./FichierJointOrderByInput";

@ArgsType()
class FichierJointFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FichierJointWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FichierJointWhereInput, { nullable: true })
  @Type(() => FichierJointWhereInput)
  where?: FichierJointWhereInput;

  @ApiProperty({
    required: false,
    type: [FichierJointOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FichierJointOrderByInput], { nullable: true })
  @Type(() => FichierJointOrderByInput)
  orderBy?: Array<FichierJointOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FichierJointFindManyArgs as FichierJointFindManyArgs };
