import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const RendezVousCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="createur.id"
          reference="Utilisateur"
          label="Createur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Motif" source="motif" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <SelectInput
          source="statut"
          label="Statut"
          choices={[
            { label: "Actif", value: "Actif" },
            { label: "Inactif", value: "Inactif" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
