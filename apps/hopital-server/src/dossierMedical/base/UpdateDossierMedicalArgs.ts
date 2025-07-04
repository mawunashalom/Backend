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
import { DossierMedicalWhereUniqueInput } from "./DossierMedicalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DossierMedicalUpdateInput } from "./DossierMedicalUpdateInput";

@ArgsType()
class UpdateDossierMedicalArgs {
  @ApiProperty({
    required: true,
    type: () => DossierMedicalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DossierMedicalWhereUniqueInput)
  @Field(() => DossierMedicalWhereUniqueInput, { nullable: false })
  where!: DossierMedicalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DossierMedicalUpdateInput,
  })
  @ValidateNested()
  @Type(() => DossierMedicalUpdateInput)
  @Field(() => DossierMedicalUpdateInput, { nullable: false })
  data!: DossierMedicalUpdateInput;
}

export { UpdateDossierMedicalArgs as UpdateDossierMedicalArgs };
