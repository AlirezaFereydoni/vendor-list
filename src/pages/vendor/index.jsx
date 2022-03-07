// Style
import "./style.scss";

// Hooks
import { useEffect, useState, useRef } from "react";
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
  const WrapperRef = useRef < HTMLDivElement > null;

  const LAT = 35.754;
  const LONG = 51.328;

  // check End of scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= WrapperRef.offsetHeight) {
        getMoreVendor(
          setPage(prev => prev + 1),
          1000
        );
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
  const getMoreVendor = (fn, delay) => {
    let debounceTimer;

    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <MainPageLayout>
      <main className="vendor" ref={WrapperRef}>
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
