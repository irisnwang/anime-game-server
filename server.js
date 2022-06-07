import express from 'express';
import cors from 'cors';
import questionController from "./controllers/questions-controller.js"
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://0.0.0.0:27017/anime'

mongoose.connect(CONNECTION_STRING)
const app = express();

app.use(cors());
app.use(express.json());

questionController(app);

app.listen(process.env.PORT || 4000);
