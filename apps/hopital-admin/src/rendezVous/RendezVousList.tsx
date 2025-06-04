import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const RendezVousList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"RendezVous Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Createur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Motif" source="motif" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Statut" source="statut" />{" "}
      </Datagrid>
    </List>
  );
};
