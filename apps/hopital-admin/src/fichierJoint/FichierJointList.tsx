import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOSSIERMEDICAL_TITLE_FIELD } from "../dossierMedical/DossierMedicalTitle";

export const FichierJointList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FichierJoints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Dossier"
          source="dossiermedical.id"
          reference="DossierMedical"
        >
          <TextField source={DOSSIERMEDICAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
