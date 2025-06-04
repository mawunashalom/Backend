import { DepenseUpdateManyWithoutUtilisateursInput } from "./DepenseUpdateManyWithoutUtilisateursInput";
import { DgtcpWhereUniqueInput } from "../dgtcp/DgtcpWhereUniqueInput";
import { DossierMedicalUpdateManyWithoutUtilisateursInput } from "./DossierMedicalUpdateManyWithoutUtilisateursInput";
import { HistoriqueActionUpdateManyWithoutUtilisateursInput } from "./HistoriqueActionUpdateManyWithoutUtilisateursInput";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { OrdonnanceUpdateManyWithoutUtilisateursInput } from "./OrdonnanceUpdateManyWithoutUtilisateursInput";
import { PatientUpdateManyWithoutUtilisateursInput } from "./PatientUpdateManyWithoutUtilisateursInput";
import { RendezVousUpdateManyWithoutUtilisateursInput } from "./RendezVousUpdateManyWithoutUtilisateursInput";
import { RetraitStockUpdateManyWithoutUtilisateursInput } from "./RetraitStockUpdateManyWithoutUtilisateursInput";

export type UtilisateurUpdateInput = {
  depenses?: DepenseUpdateManyWithoutUtilisateursInput;
  dgtcp?: DgtcpWhereUniqueInput | null;
  dossiersMedicaux?: DossierMedicalUpdateManyWithoutUtilisateursInput;
  email?: string;
  historiques?: HistoriqueActionUpdateManyWithoutUtilisateursInput;
  hopital?: HopitalWhereUniqueInput | null;
  motDePasse?: string;
  nom?: string;
  ordonnances?: OrdonnanceUpdateManyWithoutUtilisateursInput;
  patients?: PatientUpdateManyWithoutUtilisateursInput;
  prenom?: string;
  rendezVous?: RendezVousUpdateManyWithoutUtilisateursInput;
  retraitsStock?: RetraitStockUpdateManyWithoutUtilisateursInput;
  role?:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "MEDECIN"
    | "PHARMACIEN"
    | "ACCUEIL"
    | "COMPTABLE"
    | "DGTCP";
  statut?: "Actif" | "Inactif";
};
