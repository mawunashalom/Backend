import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "email";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.email?.toString() || String(record.id);
};
