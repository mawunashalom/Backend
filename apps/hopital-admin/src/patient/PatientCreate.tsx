import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";
import { DossierMedicalTitle } from "../dossierMedical/DossierMedicalTitle";
import { HopitalTitle } from "../hopital/HopitalTitle";
import { RendezVousTitle } from "../rendezVous/RendezVousTitle";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Adresse" source="adresse" />
        <ReferenceInput
          source="createur.id"
          reference="Utilisateur"
          label="Createur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date Naissance" source="dateNaissance" />
        <ReferenceArrayInput source="dossiers" reference="DossierMedical">
          <SelectArrayInput
            optionText={DossierMedicalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="hopital.id" reference="Hopital" label="Hopital">
          <SelectInput optionText={HopitalTitle} />
        </ReferenceInput>
        <TextInput label="Nom" source="nom" />
        <TextInput label="Prenom" source="prenom" />
        <ReferenceArrayInput source="rendezVous" reference="RendezVous">
          <SelectArrayInput
            optionText={RendezVousTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="sexe"
          label="Sexe"
          choices={[
            { label: "MASCULIN", value: "MASCULIN" },
            { label: "FEMININ", value: "FEMININ" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
