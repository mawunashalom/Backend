import { EmployeWhereInput } from "./EmployeWhereInput";

export type EmployeListRelationFilter = {
  every?: EmployeWhereInput;
  some?: EmployeWhereInput;
  none?: EmployeWhereInput;
};
