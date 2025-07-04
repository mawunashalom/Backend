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
import { OrdonnanceWhereUniqueInput } from "./OrdonnanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrdonnanceUpdateInput } from "./OrdonnanceUpdateInput";

@ArgsType()
class UpdateOrdonnanceArgs {
  @ApiProperty({
    required: true,
    type: () => OrdonnanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrdonnanceWhereUniqueInput)
  @Field(() => OrdonnanceWhereUniqueInput, { nullable: false })
  where!: OrdonnanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrdonnanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrdonnanceUpdateInput)
  @Field(() => OrdonnanceUpdateInput, { nullable: false })
  data!: OrdonnanceUpdateInput;
}

export { UpdateOrdonnanceArgs as UpdateOrdonnanceArgs };
