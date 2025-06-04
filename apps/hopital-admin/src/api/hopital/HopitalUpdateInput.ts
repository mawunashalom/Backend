import { DepenseUpdateManyWithoutHopitalsInput } from "./DepenseUpdateManyWithoutHopitalsInput";
import { EmployeUpdateManyWithoutHopitalsInput } from "./EmployeUpdateManyWithoutHopitalsInput";
import { MedicamentUpdateManyWithoutHopitalsInput } from "./MedicamentUpdateManyWithoutHopitalsInput";
import { PatientUpdateManyWithoutHopitalsInput } from "./PatientUpdateManyWithoutHopitalsInput";
import { UtilisateurUpdateManyWithoutHopitalsInput } from "./UtilisateurUpdateManyWithoutHopitalsInput";

export type HopitalUpdateInput = {
  depenses?: DepenseUpdateManyWithoutHopitalsInput;
  employes?: EmployeUpdateManyWithoutHopitalsInput;
  medicaments?: MedicamentUpdateManyWithoutHopitalsInput;
  nom?: string;
  patients?: PatientUpdateManyWithoutHopitalsInput;
  statut?: "Actif" | "Inactif";
  utilisateurs?: UtilisateurUpdateManyWithoutHopitalsInput;
  ville?: string;
};
