import mongoose  from "mongoose";
const Schema = mongoose.Schema;
const movieSchema = new Schema
(
    {
        name: String, // Movie name
        genre: String, // Movie genre
        desc: String,  // Movie description
        director: String, // Movie director
        releaseYear: Number, // Release year

    }
);

// Create the model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;