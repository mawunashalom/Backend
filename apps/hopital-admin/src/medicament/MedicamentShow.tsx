import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { MEDICAMENT_TITLE_FIELD } from "./MedicamentTitle";
import { ORDONNANCE_TITLE_FIELD } from "../ordonnance/OrdonnanceTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const MedicamentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Hopital" source="hopital.id" reference="Hopital">
          <TextField source={HOPITAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Quantite" source="quantite" />
        <ReferenceManyField
          reference="LigneOrdonnance"
          target="medicamentId"
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
        <ReferenceManyField
          reference="RetraitStock"
          target="medicamentId"
          label="RetraitStocks"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
