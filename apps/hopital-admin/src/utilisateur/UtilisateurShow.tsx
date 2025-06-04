import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { HOPITAL_TITLE_FIELD } from "../hopital/HopitalTitle";
import { UTILISATEUR_TITLE_FIELD } from "./UtilisateurTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { DOSSIERMEDICAL_TITLE_FIELD } from "../dossierMedical/DossierMedicalTitle";
import { MEDICAMENT_TITLE_FIELD } from "../medicament/MedicamentTitle";
import { DGTCP_TITLE_FIELD } from "../dgtcp/DgtcpTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Depense"
          target="utilisateurId"
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
          reference="DossierMedical"
          target="utilisateurId"
          label="DossierMedicals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
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
          reference="HistoriqueAction"
          target="utilisateurId"
          label="HistoriqueActions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
          reference="Ordonnance"
          target="utilisateurId"
          label="Ordonnances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dossier"
              source="dossiermedical.id"
              reference="DossierMedical"
            >
              <TextField source={DOSSIERMEDICAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Statut" source="statut" />
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
          reference="Patient"
          target="utilisateurId"
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
          reference="RendezVous"
          target="utilisateurId"
          label="RendezVous Items"
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
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Statut" source="statut" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RetraitStock"
          target="utilisateurId"
          label="RetraitStocks"
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
