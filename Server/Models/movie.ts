import mongoose  from "mongoose";
const Schema = mongoose.Schema;
const movieSchema = new Schema
(
    {
        Name: String, // Movie name
        Genre: String, // Movie genre
        Desc: String,  // Movie description
        Director: String, // Movie director
        ReleaseYear: Number // Release year

    },
    {
        collection:"movie"
    }
);

// Create the model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;