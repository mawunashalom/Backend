import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const RetraitStockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Medicament"
          source="medicament.id"
          reference="Medicament"
        >
          <TextField source={MEDICAMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Motif" source="motif" />
        <TextField label="Quantite" source="quantite" />
        <TextField label="Type" source="type" />
        <ReferenceField
          label="Utilisateur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
