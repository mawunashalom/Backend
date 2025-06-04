import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { DepenseTitle } from "../depense/DepenseTitle";
import { EmployeTitle } from "../employe/EmployeTitle";
import { MedicamentTitle } from "../medicament/MedicamentTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const HopitalCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceArrayInput source="employes" reference="Employe">
          <SelectArrayInput
            optionText={EmployeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="medicaments" reference="Medicament">
          <SelectArrayInput
            optionText={MedicamentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Nom" source="nom" />
        <ReferenceArrayInput source="patients" reference="Patient">
          <SelectArrayInput
            optionText={PatientTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <ReferenceArrayInput source="utilisateurs" reference="Utilisateur">
          <SelectArrayInput
            optionText={UtilisateurTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Ville" source="ville" />
      </SimpleForm>
    </Create>
  );
};
