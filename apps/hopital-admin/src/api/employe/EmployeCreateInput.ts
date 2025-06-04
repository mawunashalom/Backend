import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";

export type EmployeCreateInput = {
  adresse: string;
  agents: string;
  contactUrgence: string;
  email: string;
  hopital: HopitalWhereUniqueInput;
  nom: string;
  poste: string;
  prenom: string;
  sexe: "MASCULIN" | "FEMININ";
  statut: "Actif" | "Inactif";
  telephone: string;
};
