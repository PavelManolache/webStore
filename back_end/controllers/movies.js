const MovieSchema = require('../models/Movie.js');
module.exports.controller = (app) => {
    // add a new movie
    app.post('/movies', (req, res) => {
        const newMovie = new MovieSchema({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre,
            img: req.body.img,
        });
        newMovie.save();
    });
    app.get("/movies", async (req, res) => {
        try {
            const movies = await MovieSchema.find(); // Fetch all movies from MongoDB
            res.json(movies);
        } catch (error) {
            res.status(500).json({ message: "Error fetching movies", error });
        }
    });
};