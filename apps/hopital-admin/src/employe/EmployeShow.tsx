import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const EmployeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Adresse" source="adresse" />
        <TextField label="Agents" source="agents" />
        <TextField label="Contact Urgence" source="contactUrgence" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <ReferenceField label="Hopital" source="hopital.id" reference="Hopital">
          <TextField source={HOPITAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Poste" source="poste" />
        <TextField label="Prenom" source="prenom" />
        <TextField label="Sexe" source="sexe" />
        <TextField label="Statut" source="statut" />
        <TextField label="Telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
