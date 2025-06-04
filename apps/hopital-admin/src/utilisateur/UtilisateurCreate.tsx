import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DepenseTitle } from "../depense/DepenseTitle";
import { DgtcpTitle } from "../dgtcp/DgtcpTitle";
import { DossierMedicalTitle } from "../dossierMedical/DossierMedicalTitle";
import { HistoriqueActionTitle } from "../historiqueAction/HistoriqueActionTitle";
import { HopitalTitle } from "../hopital/HopitalTitle";
import { OrdonnanceTitle } from "../ordonnance/OrdonnanceTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { RendezVousTitle } from "../rendezVous/RendezVousTitle";
import { RetraitStockTitle } from "../retraitStock/RetraitStockTitle";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="depenses" reference="Depense">
          <SelectArrayInput
            optionText={DepenseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="dgtcp.id" reference="Dgtcp" label="Dgtcp">
          <SelectInput optionText={DgtcpTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="dossiersMedicaux"
          reference="DossierMedical"
        >
          <SelectArrayInput
            optionText={DossierMedicalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <ReferenceArrayInput source="historiques" reference="HistoriqueAction">
          <SelectArrayInput
            optionText={HistoriqueActionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="hopital.id" reference="Hopital" label="Hopital">
          <SelectInput optionText={HopitalTitle} />
        </ReferenceInput>
        <TextInput label="Mot De Passe" source="motDePasse" />
        <TextInput label="Nom" source="nom" />
        <ReferenceArrayInput source="ordonnances" reference="Ordonnance">
          <SelectArrayInput
            optionText={OrdonnanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="patients" reference="Patient">
          <SelectArrayInput
            optionText={PatientTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Prenom" source="prenom" />
        <ReferenceArrayInput source="rendezVous" reference="RendezVous">
          <SelectArrayInput
            optionText={RendezVousTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="retraitsStock" reference="RetraitStock">
          <SelectArrayInput
            optionText={RetraitStockTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "SUPER_ADMIN", value: "SUPER_ADMIN" },
            { label: "ADMIN", value: "ADMIN" },
            { label: "MEDECIN", value: "MEDECIN" },
            { label: "PHARMACIEN", value: "PHARMACIEN" },
            { label: "ACCUEIL", value: "ACCUEIL" },
            { label: "COMPTABLE", value: "COMPTABLE" },
            { label: "DGTCP", value: "DGTCP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="statut"
          label="Statut"
          choices={[
            { label: "Actif", value: "Actif" },
            { label: "Inactif", value: "Inactif" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
