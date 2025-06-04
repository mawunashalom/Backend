import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { HopitalTitle } from "../hopital/HopitalTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const DepenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="hopital.id" reference="Hopital" label="Hopital">
          <SelectInput optionText={HopitalTitle} />
        </ReferenceInput>
        <NumberInput label="Montant" source="montant" />
        <TextInput label="Motif" source="motif" />
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
