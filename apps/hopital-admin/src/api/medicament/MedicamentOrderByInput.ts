import { SortOrder } from "../../util/SortOrder";

export type MedicamentOrderByInput = {
  hopitalId?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  quantite?: SortOrder;
};
