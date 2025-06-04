import { DepenseCreateNestedManyWithoutUtilisateursInput } from "./DepenseCreateNestedManyWithoutUtilisateursInput";
import { DgtcpWhereUniqueInput } from "../dgtcp/DgtcpWhereUniqueInput";
import { DossierMedicalCreateNestedManyWithoutUtilisateursInput } from "./DossierMedicalCreateNestedManyWithoutUtilisateursInput";
import { HistoriqueActionCreateNestedManyWithoutUtilisateursInput } from "./HistoriqueActionCreateNestedManyWithoutUtilisateursInput";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { OrdonnanceCreateNestedManyWithoutUtilisateursInput } from "./OrdonnanceCreateNestedManyWithoutUtilisateursInput";
import { PatientCreateNestedManyWithoutUtilisateursInput } from "./PatientCreateNestedManyWithoutUtilisateursInput";
import { RendezVousCreateNestedManyWithoutUtilisateursInput } from "./RendezVousCreateNestedManyWithoutUtilisateursInput";
import { RetraitStockCreateNestedManyWithoutUtilisateursInput } from "./RetraitStockCreateNestedManyWithoutUtilisateursInput";

export type UtilisateurCreateInput = {
  depenses?: DepenseCreateNestedManyWithoutUtilisateursInput;
  dgtcp?: DgtcpWhereUniqueInput | null;
  dossiersMedicaux?: DossierMedicalCreateNestedManyWithoutUtilisateursInput;
  email: string;
  historiques?: HistoriqueActionCreateNestedManyWithoutUtilisateursInput;
  hopital?: HopitalWhereUniqueInput | null;
  motDePasse: string;
  nom: string;
  ordonnances?: OrdonnanceCreateNestedManyWithoutUtilisateursInput;
  patients?: PatientCreateNestedManyWithoutUtilisateursInput;
  prenom: string;
  rendezVous?: RendezVousCreateNestedManyWithoutUtilisateursInput;
  retraitsStock?: RetraitStockCreateNestedManyWithoutUtilisateursInput;
  role:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "MEDECIN"
    | "PHARMACIEN"
    | "ACCUEIL"
    | "COMPTABLE"
    | "DGTCP";
  statut: "Actif" | "Inactif";
};
