import { Dgtcp as TDgtcp } from "../api/dgtcp/Dgtcp";

export const DGTCP_TITLE_FIELD = "id";

export const DgtcpTitle = (record: TDgtcp): string => {
  return record.id?.toString() || String(record.id);
};
