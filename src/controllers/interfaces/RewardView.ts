import { ItemAttributes } from "../../models/Item";

export interface RewardView {
  id: number | null;
  name: string;
  credits_require: number;
  items: ItemAttributes[] | [];
}
