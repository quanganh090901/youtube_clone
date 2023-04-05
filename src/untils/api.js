import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'7590e5c13fmsh90b582e78de3740p1e05a1jsn8dab86f51810',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
}
