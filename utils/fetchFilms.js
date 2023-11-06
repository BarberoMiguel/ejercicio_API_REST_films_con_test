require('dotenv').config();
const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;

const fetchFilm = async (id="") => {
    let response = await fetch(`https://www.omdbapi.com/?t=${id}&apikey=${apiKey}&`); //{}
    let films = await response.json(); //{}

    return films;
};

module.exports = {
    fetchFilm
}
