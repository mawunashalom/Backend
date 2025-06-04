import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DossierMedicalTitle } from "../dossierMedical/DossierMedicalTitle";
import { LigneOrdonnanceTitle } from "../ligneOrdonnance/LigneOrdonnanceTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const OrdonnanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dossier.id"
          reference="DossierMedical"
          label="Dossier"
        >
          <SelectInput optionText={DossierMedicalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="lignes" reference="LigneOrdonnance">
          <SelectArrayInput
            optionText={LigneOrdonnanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="statut"
          label="Statut"
          choices={[
            { label: "EN_ATTENTE", value: "EN_ATTENTE" },
            { label: "VALIDEE", value: "VALIDEE" },
            { label: "REJETEE", value: "REJETEE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="Utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
