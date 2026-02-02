import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/operations";
import { selectSelectedCamper } from "../redux/selectors";
import CamperDetails from "../components/CamperDetails/CamperDetails";
import Loader from "../components/Loader/Loader";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector((state) => state.campers.isLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!camper) return null;

  return <CamperDetails camper={camper} />;
};

export default CamperDetailsPage;
