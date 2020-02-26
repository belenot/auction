import { IUser } from "../interfaces";

export function withoutField(obj: any, field: string): any {
  const { [field]: any, ...rest } = obj;
  return rest;
}