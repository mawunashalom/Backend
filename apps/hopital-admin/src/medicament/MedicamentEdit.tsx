import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { HopitalTitle } from "../hopital/HopitalTitle";
import { LigneOrdonnanceTitle } from "../ligneOrdonnance/LigneOrdonnanceTitle";
import { RetraitStockTitle } from "../retraitStock/RetraitStockTitle";

export const MedicamentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="hopital.id" reference="Hopital" label="Hopital">
          <SelectInput optionText={HopitalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="lignes" reference="LigneOrdonnance">
          <SelectArrayInput
            optionText={LigneOrdonnanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Nom" source="nom" />
        <NumberInput step={1} label="Quantite" source="quantite" />
        <ReferenceArrayInput source="retraits" reference="RetraitStock">
          <SelectArrayInput
            optionText={RetraitStockTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
