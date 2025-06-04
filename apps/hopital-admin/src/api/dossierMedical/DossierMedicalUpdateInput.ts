import { FichierJointUpdateManyWithoutDossierMedicalsInput } from "./FichierJointUpdateManyWithoutDossierMedicalsInput";
import { OrdonnanceUpdateManyWithoutDossierMedicalsInput } from "./OrdonnanceUpdateManyWithoutDossierMedicalsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type DossierMedicalUpdateInput = {
  description?: string;
  fichiers?: FichierJointUpdateManyWithoutDossierMedicalsInput;
  ordonnances?: OrdonnanceUpdateManyWithoutDossierMedicalsInput;
  patient?: PatientWhereUniqueInput;
  utilisateur?: UtilisateurWhereUniqueInput;
};
