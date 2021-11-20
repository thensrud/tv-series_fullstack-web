import axios from "axios";
import { ITrailer } from "../interfaces/ITrailer";

export const trailerService = (function () {
  const urlToTrailerController = "https://localhost:5001/trailer";

  const getTrailer = async () => {
    const result = await axios.get(urlToTrailerController);
    return result.data as ITrailer[];
  };

  return { getTrailer };
})();
