const router = require('express').Router()

const fetch = require('node-fetch');

const fetchFilms = require('../utils/fetchFilms');

const getFilm = async (req, res) => {
    try {
        const id = req.params.id || "";
        let film = await fetchFilms.fetchFilm(id); //{}
        res.status(200).json(film);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json({message: "Film not found"});
    }
}

router.get("/:id", (req, res) => {
    const id = req.params.id;
    getFilm(id);
})

router.post("/", (req, res) => {
    res.status(200).json({
        message: "Se ha guardado Titanic"
    });
});

router.put("/", (req, res) => {
    res.status(200).json({
        id:"0", message: "Se ha actualizado Titanic"
    });
        
});
router.delete("/:id?", (req, res) => {
    res.status(200).json({
        id: 123, message: "Se ha borrado la película con ID: 123"
    });
});

module.exports = router;