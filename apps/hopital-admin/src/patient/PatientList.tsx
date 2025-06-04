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
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";
import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Createur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date Naissance" source="dateNaissance" />
        <ReferenceField label="Hopital" source="hopital.id" reference="Hopital">
          <TextField source={HOPITAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Prenom" source="prenom" />
        <TextField label="Sexe" source="sexe" />
        <TextField label="Telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
