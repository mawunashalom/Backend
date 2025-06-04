import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DossierMedicalTitle } from "../dossierMedical/DossierMedicalTitle";

export const FichierJointCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dossier.id"
          reference="DossierMedical"
          label="Dossier"
        >
          <SelectInput optionText={DossierMedicalTitle} />
        </ReferenceInput>
        <TextInput label="Nom" source="nom" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
