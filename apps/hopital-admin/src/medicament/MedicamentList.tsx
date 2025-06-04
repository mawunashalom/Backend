import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const MedicamentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Medicaments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Hopital" source="hopital.id" reference="Hopital">
          <TextField source={HOPITAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Quantite" source="quantite" />{" "}
      </Datagrid>
    </List>
  );
};
