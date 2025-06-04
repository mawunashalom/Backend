import { RetraitStock as TRetraitStock } from "../api/retraitStock/RetraitStock";

export const RETRAITSTOCK_TITLE_FIELD = "motif";

export const RetraitStockTitle = (record: TRetraitStock): string => {
  return record.motif?.toString() || String(record.id);
};
