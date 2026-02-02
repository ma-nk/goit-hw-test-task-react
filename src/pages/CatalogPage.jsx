
import { useEffect, useState } from "react";
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
  const total = useSelector((state) => state.campers.total);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(clearFilters());
    setPage(1);
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
    setPage(1);
    dispatch(fetchCampers({ ...searchFilters, page: 1, limit: 4 }));
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ ...filters, page: nextPage, limit: 4 }));
  };

  const showLoadMore = campers.length < total && !isLoading;

  return (
    <div className={css.container}>
      <Filter onSearch={handleSearch} />
      {/* Remove Loader here if you want it only for initial load or handle it differently */}
      {/* Usually Loader is shown over the list or as a spinner at bottom */}
      <div className={css.listContainer}>
          {campers.length > 0 ? (
            <CamperList campers={campers} />
          ) : (
            !isLoading && <p>No campers found.</p>
          )}
          {isLoading && <Loader />}
          {showLoadMore && (
            <button className={css.loadMoreBtn} onClick={handleLoadMore}>
              Load More
            </button>
          )}
      </div>
    </div>
  );
};

export default CatalogPage;
