import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { HopitalTitle } from "../hopital/HopitalTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const DepenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
