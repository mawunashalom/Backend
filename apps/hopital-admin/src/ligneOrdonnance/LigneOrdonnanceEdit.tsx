import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { MedicamentTitle } from "../medicament/MedicamentTitle";
import { OrdonnanceTitle } from "../ordonnance/OrdonnanceTitle";

export const LigneOrdonnanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
