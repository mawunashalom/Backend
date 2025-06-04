import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
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

export const MedicamentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
