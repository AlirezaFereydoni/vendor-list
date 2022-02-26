// Style
import "./style.scss";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Layout
import MainPageLayout from "../../layouts/mainPage";

// Actions
import { GetVendorList } from "../../store/actions/vendor";

// Components
import RestaurantCard from "../../components/card/restaurant";

const Vendor = () => {
  const dispatch = useDispatch();
  const Vendors = useSelector(state => state.Vendors);
  const [page, setPage] = useState(0);

  const LAT = 35.754;
  const LONG = 51.328;
  let debounceTimer = "";

  // check End of scroll
  useEffect(() => {
    const handleScroll = () => {
      let vendorList = document.querySelector(".vendor");
      if (window.scrollY + window.innerHeight >= vendorList.offsetHeight) {
        getMoreVendor();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  // Get vendor list
  useEffect(() => {
    GetVendorList(dispatch, { lat: LAT, long: LONG, page: page, page_size: 10 });
  }, [dispatch, page]);

  // add next page and debouncing extra get list
  const getMoreVendor = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setPage(prev => prev + 1);
    }, 1000);
  };

  return (
    <MainPageLayout>
      <main className="vendor">
        {Vendors?.finalResult?.length &&
          Vendors.finalResult.map((item, i) => {
            return item.type === "VENDOR" ? (
              <RestaurantCard key={item.data.id} {...item.data} />
            ) : null;
          })}
      </main>
    </MainPageLayout>
  );
};

export default Vendor;
