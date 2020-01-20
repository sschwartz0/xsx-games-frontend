import { get } from "./get";
import { set } from "./set";

export interface Action {
  type: string;
  reducer: string;
  key: string;
  value: any;
}

export const api = {
  get,
  set,
};
