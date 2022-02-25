// Types

import { iVendorList } from "../../types/interfaces";

const initialState: iVendorList = {} as iVendorList;

type ActionType = { type: "GET_VENDOR_LIST"; vendorList: iVendorList };

const VendorReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "GET_VENDOR_LIST":
      return action.vendorList;

    default:
      return state;
  }
};

export default VendorReducer;
