import { MedicamentWhereUniqueInput } from "../medicament/MedicamentWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RetraitStockUpdateInput = {
  medicament?: MedicamentWhereUniqueInput;
  motif?: string | null;
  quantite?: number;
  type?: "ORDONNANCE" | "MANUEL";
  utilisateur?: UtilisateurWhereUniqueInput;
};
