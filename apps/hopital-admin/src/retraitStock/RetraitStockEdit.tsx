import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MedicamentTitle } from "../medicament/MedicamentTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const RetraitStockEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Motif" source="motif" />
        <NumberInput step={1} label="Quantite" source="quantite" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "ORDONNANCE", value: "ORDONNANCE" },
            { label: "MANUEL", value: "MANUEL" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="Utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
