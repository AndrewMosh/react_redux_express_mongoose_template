import axios from "axios";
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./types";

export const fetchData = () => (dispatch) => {
  axios
    .get("/api/data")
    .then((res) => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.message })
    );
};
