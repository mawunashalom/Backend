import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { MedicamentTitle } from "../medicament/MedicamentTitle";
import { OrdonnanceTitle } from "../ordonnance/OrdonnanceTitle";

export const LigneOrdonnanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="medicament.id"
          reference="Medicament"
          label="Medicament"
        >
          <SelectInput optionText={MedicamentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="ordonnance.id"
          reference="Ordonnance"
          label="Ordonnance"
        >
          <SelectInput optionText={OrdonnanceTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantite" source="quantite" />
      </SimpleForm>
    </Create>
  );
};
