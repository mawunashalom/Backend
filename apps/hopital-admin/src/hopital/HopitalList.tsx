import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HopitalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Hopitals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Ville" source="ville" />{" "}
      </Datagrid>
    </List>
  );
};
