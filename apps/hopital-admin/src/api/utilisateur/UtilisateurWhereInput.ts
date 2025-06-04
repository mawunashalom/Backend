import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DepenseListRelationFilter } from "../depense/DepenseListRelationFilter";
import { DgtcpWhereUniqueInput } from "../dgtcp/DgtcpWhereUniqueInput";
import { DossierMedicalListRelationFilter } from "../dossierMedical/DossierMedicalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { HistoriqueActionListRelationFilter } from "../historiqueAction/HistoriqueActionListRelationFilter";
import { HopitalWhereUniqueInput } from "../hopital/HopitalWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { OrdonnanceListRelationFilter } from "../ordonnance/OrdonnanceListRelationFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { RendezVousListRelationFilter } from "../rendezVous/RendezVousListRelationFilter";
import { RetraitStockListRelationFilter } from "../retraitStock/RetraitStockListRelationFilter";

export type UtilisateurWhereInput = {
  createdAt?: DateTimeFilter;
  depenses?: DepenseListRelationFilter;
  dgtcp?: DgtcpWhereUniqueInput;
  dossiersMedicaux?: DossierMedicalListRelationFilter;
  email?: StringFilter;
  historiques?: HistoriqueActionListRelationFilter;
  hopital?: HopitalWhereUniqueInput;
  id?: IntFilter;
  motDePasse?: StringFilter;
  nom?: StringFilter;
  ordonnances?: OrdonnanceListRelationFilter;
  patients?: PatientListRelationFilter;
  prenom?: StringFilter;
  rendezVous?: RendezVousListRelationFilter;
  retraitsStock?: RetraitStockListRelationFilter;
  role?:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "MEDECIN"
    | "PHARMACIEN"
    | "ACCUEIL"
    | "COMPTABLE"
    | "DGTCP";
  statut?: "Actif" | "Inactif";
  updatedAt?: DateTimeFilter;
};
