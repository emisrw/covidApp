import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recorvered, deaths, lastUpdate },
    } = await axios.get(`${proxy}${url}`);
    const modifiedData = {
      confirmed,
      recorvered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};
