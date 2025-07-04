/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DgtcpWhereInput } from "./DgtcpWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DgtcpListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DgtcpWhereInput,
  })
  @ValidateNested()
  @Type(() => DgtcpWhereInput)
  @IsOptional()
  @Field(() => DgtcpWhereInput, {
    nullable: true,
  })
  every?: DgtcpWhereInput;

  @ApiProperty({
    required: false,
    type: () => DgtcpWhereInput,
  })
  @ValidateNested()
  @Type(() => DgtcpWhereInput)
  @IsOptional()
  @Field(() => DgtcpWhereInput, {
    nullable: true,
  })
  some?: DgtcpWhereInput;

  @ApiProperty({
    required: false,
    type: () => DgtcpWhereInput,
  })
  @ValidateNested()
  @Type(() => DgtcpWhereInput)
  @IsOptional()
  @Field(() => DgtcpWhereInput, {
    nullable: true,
  })
  none?: DgtcpWhereInput;
}
export { DgtcpListRelationFilter as DgtcpListRelationFilter };
