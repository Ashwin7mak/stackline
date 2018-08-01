import { SORT } from "../../constants";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};
