import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { DOSSIERMEDICAL_TITLE_FIELD } from "../dossierMedical/DossierMedicalTitle";

export const FichierJointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Dossier"
          source="dossiermedical.id"
          reference="DossierMedical"
        >
          <TextField source={DOSSIERMEDICAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
