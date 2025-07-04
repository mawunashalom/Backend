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
import { DepenseCreateNestedManyWithoutHopitalsInput } from "./DepenseCreateNestedManyWithoutHopitalsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EmployeCreateNestedManyWithoutHopitalsInput } from "./EmployeCreateNestedManyWithoutHopitalsInput";
import { MedicamentCreateNestedManyWithoutHopitalsInput } from "./MedicamentCreateNestedManyWithoutHopitalsInput";
import { PatientCreateNestedManyWithoutHopitalsInput } from "./PatientCreateNestedManyWithoutHopitalsInput";
import { EnumHopitalStatut } from "./EnumHopitalStatut";
import { UtilisateurCreateNestedManyWithoutHopitalsInput } from "./UtilisateurCreateNestedManyWithoutHopitalsInput";

@InputType()
class HopitalCreateInput {
  @ApiProperty({
    required: false,
    type: () => DepenseCreateNestedManyWithoutHopitalsInput,
  })
  @ValidateNested()
  @Type(() => DepenseCreateNestedManyWithoutHopitalsInput)
  @IsOptional()
  @Field(() => DepenseCreateNestedManyWithoutHopitalsInput, {
    nullable: true,
  })
  depenses?: DepenseCreateNestedManyWithoutHopitalsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeCreateNestedManyWithoutHopitalsInput,
  })
  @ValidateNested()
  @Type(() => EmployeCreateNestedManyWithoutHopitalsInput)
  @IsOptional()
  @Field(() => EmployeCreateNestedManyWithoutHopitalsInput, {
    nullable: true,
  })
  employes?: EmployeCreateNestedManyWithoutHopitalsInput;

  @ApiProperty({
    required: false,
    type: () => MedicamentCreateNestedManyWithoutHopitalsInput,
  })
  @ValidateNested()
  @Type(() => MedicamentCreateNestedManyWithoutHopitalsInput)
  @IsOptional()
  @Field(() => MedicamentCreateNestedManyWithoutHopitalsInput, {
    nullable: true,
  })
  medicaments?: MedicamentCreateNestedManyWithoutHopitalsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  nom!: string;

  @ApiProperty({
    required: false,
    type: () => PatientCreateNestedManyWithoutHopitalsInput,
  })
  @ValidateNested()
  @Type(() => PatientCreateNestedManyWithoutHopitalsInput)
  @IsOptional()
  @Field(() => PatientCreateNestedManyWithoutHopitalsInput, {
    nullable: true,
  })
  patients?: PatientCreateNestedManyWithoutHopitalsInput;

  @ApiProperty({
    required: true,
    enum: EnumHopitalStatut,
  })
  @IsEnum(EnumHopitalStatut)
  @Field(() => EnumHopitalStatut)
  statut!: "Actif" | "Inactif";

  @ApiProperty({
    required: false,
    type: () => UtilisateurCreateNestedManyWithoutHopitalsInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurCreateNestedManyWithoutHopitalsInput)
  @IsOptional()
  @Field(() => UtilisateurCreateNestedManyWithoutHopitalsInput, {
    nullable: true,
  })
  utilisateurs?: UtilisateurCreateNestedManyWithoutHopitalsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  ville!: string;
}

export { HopitalCreateInput as HopitalCreateInput };
