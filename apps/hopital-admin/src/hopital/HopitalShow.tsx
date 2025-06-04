import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOPITAL_TITLE_FIELD } from "./HopitalTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";
import { DGTCP_TITLE_FIELD } from "../dgtcp/DgtcpTitle";

export const HopitalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Ville" source="ville" />
        <ReferenceManyField
          reference="Depense"
          target="hopitalId"
          label="Depenses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="date" label="Date" />
            <ReferenceField
              label="Hopital"
              source="hopital.id"
              reference="Hopital"
            >
              <TextField source={HOPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Montant" source="montant" />
            <TextField label="Motif" source="motif" />
            <ReferenceField
              label="Utilisateur"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Employe"
          target="hopitalId"
          label="Employes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Adresse" source="adresse" />
            <TextField label="Agents" source="agents" />
            <TextField label="Contact Urgence" source="contactUrgence" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Hopital"
              source="hopital.id"
              reference="Hopital"
            >
              <TextField source={HOPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Nom" source="nom" />
            <TextField label="Poste" source="poste" />
            <TextField label="Prenom" source="prenom" />
            <TextField label="Sexe" source="sexe" />
            <TextField label="Statut" source="statut" />
            <TextField label="Telephone" source="telephone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Medicament"
          target="hopitalId"
          label="Medicaments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Hopital"
              source="hopital.id"
              reference="Hopital"
            >
              <TextField source={HOPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Nom" source="nom" />
            <TextField label="Quantite" source="quantite" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Patient"
          target="hopitalId"
          label="Patients"
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
            <ReferenceField
              label="Hopital"
              source="hopital.id"
              reference="Hopital"
            >
              <TextField source={HOPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Nom" source="nom" />
            <TextField label="Prenom" source="prenom" />
            <TextField label="Sexe" source="sexe" />
            <TextField label="Telephone" source="telephone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Utilisateur"
          target="hopitalId"
          label="Utilisateurs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Dgtcp" source="dgtcp.id" reference="Dgtcp">
              <TextField source={DGTCP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Hopital"
              source="hopital.id"
              reference="Hopital"
            >
              <TextField source={HOPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Mot De Passe" source="motDePasse" />
            <TextField label="Nom" source="nom" />
            <TextField label="Prenom" source="prenom" />
            <TextField label="Role" source="role" />
            <TextField label="Statut" source="statut" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
