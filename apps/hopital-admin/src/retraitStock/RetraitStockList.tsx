import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const RetraitStockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"RetraitStocks"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
