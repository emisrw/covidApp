import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${proxy}${url}`);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyDate = async () => {
  try {
    const data = await axios.get(`${proxy}${url}/daily`);
    console.log(data);
  } catch (error) {}
};
