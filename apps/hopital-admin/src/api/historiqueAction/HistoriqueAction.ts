import { Utilisateur } from "../utilisateur/Utilisateur";

export type HistoriqueAction = {
  action: string;
  createdAt: Date;
  id: number;
  utilisateur?: Utilisateur;
};
