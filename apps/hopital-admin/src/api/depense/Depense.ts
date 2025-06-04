import { Hopital } from "../hopital/Hopital";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Depense = {
  date: Date;
  hopital?: Hopital;
  id: number;
  montant: number;
  motif: string;
  utilisateur?: Utilisateur;
};
