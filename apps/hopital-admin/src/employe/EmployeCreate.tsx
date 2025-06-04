import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HopitalTitle } from "../hopital/HopitalTitle";

export const EmployeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Adresse" source="adresse" />
        <TextInput label="Agents" source="agents" />
        <TextInput label="Contact Urgence" source="contactUrgence" />
        <TextInput label="Email" source="email" />
        <ReferenceInput source="hopital.id" reference="Hopital" label="Hopital">
          <SelectInput optionText={HopitalTitle} />
        </ReferenceInput>
        <TextInput label="Nom" source="nom" />
        <TextInput label="Poste" source="poste" />
        <TextInput label="Prenom" source="prenom" />
        <SelectInput
          source="sexe"
          label="Sexe"
          choices={[
            { label: "MASCULIN", value: "MASCULIN" },
            { label: "FEMININ", value: "FEMININ" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
        <TextInput label="Telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
