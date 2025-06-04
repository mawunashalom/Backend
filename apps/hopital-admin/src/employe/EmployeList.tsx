import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const EmployeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Employes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
