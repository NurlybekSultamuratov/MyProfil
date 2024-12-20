"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const movieSchema = new Schema({
    Name: String,
    Genre: String,
    Desc: String,
    Director: String,
    ReleaseYear: Number
}, {
    collection: "movie"
});
const Movie = mongoose_1.default.model("Movie", movieSchema);
exports.default = Movie;
//# sourceMappingURL=movie.js.map