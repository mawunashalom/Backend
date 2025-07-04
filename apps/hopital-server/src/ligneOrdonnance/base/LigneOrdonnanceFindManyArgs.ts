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
import { LigneOrdonnanceWhereInput } from "./LigneOrdonnanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LigneOrdonnanceOrderByInput } from "./LigneOrdonnanceOrderByInput";

@ArgsType()
class LigneOrdonnanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LigneOrdonnanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LigneOrdonnanceWhereInput, { nullable: true })
  @Type(() => LigneOrdonnanceWhereInput)
  where?: LigneOrdonnanceWhereInput;

  @ApiProperty({
    required: false,
    type: [LigneOrdonnanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LigneOrdonnanceOrderByInput], { nullable: true })
  @Type(() => LigneOrdonnanceOrderByInput)
  orderBy?: Array<LigneOrdonnanceOrderByInput>;

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

export { LigneOrdonnanceFindManyArgs as LigneOrdonnanceFindManyArgs };
