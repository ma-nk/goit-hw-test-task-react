
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/operations";
import { selectCampers } from "../redux/selectors";
import { clearFilters } from "../redux/filters/filtersSlice";
import CamperList from "../components/CamperList/CamperList";
import Filter from "../components/Filter/Filter";
import Loader from "../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector((state) => state.campers.isLoading);

  useEffect(() => {
    // Clear filters and fetch all campers on initial load
    dispatch(clearFilters());
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSearch = (searchFilters) => {
    dispatch(fetchCampers(searchFilters));
  };

  return (
    <div className={css.container}>
      <Filter onSearch={handleSearch} />
      {isLoading && <Loader />}
      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        !isLoading && <p>No campers found.</p>
      )}
    </div>
  );
};

export default CatalogPage;
