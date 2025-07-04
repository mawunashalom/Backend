/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeWhereUniqueInput } from "../../employe/base/EmployeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeUpdateManyWithoutHopitalsInput {
  @Field(() => [EmployeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeWhereUniqueInput],
  })
  connect?: Array<EmployeWhereUniqueInput>;

  @Field(() => [EmployeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeWhereUniqueInput],
  })
  disconnect?: Array<EmployeWhereUniqueInput>;

  @Field(() => [EmployeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeWhereUniqueInput],
  })
  set?: Array<EmployeWhereUniqueInput>;
}

export { EmployeUpdateManyWithoutHopitalsInput as EmployeUpdateManyWithoutHopitalsInput };
