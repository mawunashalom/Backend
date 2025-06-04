import { Medicament } from "../medicament/Medicament";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type RetraitStock = {
  createdAt: Date;
  id: number;
  medicament?: Medicament;
  motif: string | null;
  quantite: number;
  type?: "ORDONNANCE" | "MANUEL";
  utilisateur?: Utilisateur;
};
