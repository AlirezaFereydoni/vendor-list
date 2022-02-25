import { Get } from "../../service";

// Type
import { GetActionType } from "../../types/types";

const GetVendorList: GetActionType<void> = async (dispatch, filterParams) => {
  try {
    const { res, status } = await Get(`/mobile/v3/restaurant/vendors-list`, filterParams);
    if (/^2/.test(status)) {
      console.log(res);
      dispatch({ type: "GET_VENDOR_LIST", vendorList: res.data });
    }
  } catch (err) {
    console.log(err);
  }
};

export { GetVendorList };
