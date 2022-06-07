import express from 'express';
import cors from 'cors';
import questionController from "./controllers/questions-controller.js"
import mongoose from "mongoose";

mongoose.connect('mongodb://0.0.0.0:27017/anime');

const app = express();

app.use(cors());
app.use(express.json());

questionController(app);

app.listen(4000);
