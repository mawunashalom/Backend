import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DossierMedicalTitle } from "../dossierMedical/DossierMedicalTitle";

export const FichierJointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
