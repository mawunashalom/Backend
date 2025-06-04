import { HistoriqueAction as THistoriqueAction } from "../api/historiqueAction/HistoriqueAction";

export const HISTORIQUEACTION_TITLE_FIELD = "action";

export const HistoriqueActionTitle = (record: THistoriqueAction): string => {
  return record.action?.toString() || String(record.id);
};
