import mongoose from "mongoose";

const questionsSchema = mongoose.Schema({
  id: Number,
  anime: String,
  "song-title": String,
  artist: String,
  "correct-answer": Number,
  "drive-link": String,
  "youtube-link": String,
  "answer-string": String
}, {collection: "questions"})

export default questionsSchema;