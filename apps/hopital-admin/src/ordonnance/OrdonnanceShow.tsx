import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { ORDONNANCE_TITLE_FIELD } from "./OrdonnanceTitle";
import { DOSSIERMEDICAL_TITLE_FIELD } from "../dossierMedical/DossierMedicalTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const OrdonnanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Dossier"
          source="dossiermedical.id"
          reference="DossierMedical"
        >
          <TextField source={DOSSIERMEDICAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Statut" source="statut" />
        <ReferenceField
          label="Utilisateur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="LigneOrdonnance"
          target="ordonnanceId"
          label="LigneOrdonnances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medicament"
              source="medicament.id"
              reference="Medicament"
            >
              <TextField source={MEDICAMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Ordonnance"
              source="ordonnance.id"
              reference="Ordonnance"
            >
              <TextField source={ORDONNANCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantite" source="quantite" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
