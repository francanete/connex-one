import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { TOKEN } from "../env";

interface IFetchServerTime {
  setTime: Dispatch<SetStateAction<number>>;
  setIsLoadingTime: Dispatch<SetStateAction<boolean>>;
}

export const fetchServerTime = async ({
  setTime,
  setIsLoadingTime,
}: IFetchServerTime) => {
  const response = await axios
    .get("http://localhost:8000/time", {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((response) => {
      setTime(response.data.epoch);
      setIsLoadingTime(false);
    })
    .catch((error) => {
      console.error(error);
    });
  return response;
};
