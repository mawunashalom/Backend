import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { ORDONNANCE_TITLE_FIELD } from "../ordonnance/OrdonnanceTitle";

export const LigneOrdonnanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LigneOrdonnances"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Quantite" source="quantite" />{" "}
      </Datagrid>
    </List>
  );
};
