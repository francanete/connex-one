import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface IFetchMetrics {
  setMetrics: Dispatch<SetStateAction<string>>;
  setIsLoadingMetrics: Dispatch<SetStateAction<boolean>>;
}

export const fetchMetrics = async ({
  setMetrics,
  setIsLoadingMetrics,
}: IFetchMetrics) => {
  const response = await axios
    .get("http://localhost:8000/metrics")
    .then((response) => {
      setMetrics(response.data);
      setIsLoadingMetrics(false);
    })
    .catch((error) => {
      console.error(error);
    });

  return response;
};
