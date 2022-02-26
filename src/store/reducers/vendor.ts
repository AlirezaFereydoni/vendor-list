// Types

import { iVendorList } from "../../types/interfaces";

const initialState: iVendorList = { finalResult: [] as any, open_count: 0, count: 0 };

type ActionType = { type: "GET_VENDOR_LIST"; vendorList: iVendorList };

const VendorReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "GET_VENDOR_LIST":
      return { ...state, finalResult: [...state.finalResult, ...action.vendorList.finalResult] };

    default:
      return state;
  }
};

export default VendorReducer;
