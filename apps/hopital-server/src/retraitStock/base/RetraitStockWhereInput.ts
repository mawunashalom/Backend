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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { MedicamentWhereUniqueInput } from "../../medicament/base/MedicamentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumRetraitStockType } from "./EnumRetraitStockType";
import { UtilisateurWhereUniqueInput } from "../../utilisateur/base/UtilisateurWhereUniqueInput";

@InputType()
class RetraitStockWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => MedicamentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicamentWhereUniqueInput)
  @IsOptional()
  @Field(() => MedicamentWhereUniqueInput, {
    nullable: true,
  })
  medicament?: MedicamentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  motif?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  quantite?: IntFilter;

  @ApiProperty({
    required: false,
    enum: EnumRetraitStockType,
  })
  @IsEnum(EnumRetraitStockType)
  @IsOptional()
  @Field(() => EnumRetraitStockType, {
    nullable: true,
  })
  type?: "ORDONNANCE" | "MANUEL";

  @ApiProperty({
    required: false,
    type: () => UtilisateurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurWhereUniqueInput)
  @IsOptional()
  @Field(() => UtilisateurWhereUniqueInput, {
    nullable: true,
  })
  utilisateur?: UtilisateurWhereUniqueInput;
}

export { RetraitStockWhereInput as RetraitStockWhereInput };
