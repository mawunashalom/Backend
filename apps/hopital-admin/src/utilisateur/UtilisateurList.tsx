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
import { DGTCP_TITLE_FIELD } from "../dgtcp/DgtcpTitle";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Dgtcp" source="dgtcp.id" reference="Dgtcp">
          <TextField source={DGTCP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <ReferenceField label="Hopital" source="hopital.id" reference="Hopital">
          <TextField source={HOPITAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Mot De Passe" source="motDePasse" />
        <TextField label="Nom" source="nom" />
        <TextField label="Prenom" source="prenom" />
        <TextField label="Role" source="role" />
        <TextField label="Statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
