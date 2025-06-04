import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MedicamentTitle } from "../medicament/MedicamentTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const RetraitStockCreate = (props: CreateProps): React.ReactElement => {
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
    </Create>
  );
};
