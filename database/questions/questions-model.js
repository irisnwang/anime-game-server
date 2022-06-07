import mongoose from "mongoose";
import questionsSchema from "./questions-schema.js";

const questionsModel = mongoose.model(
    'QuestionsModel', questionsSchema
)

export default questionsModel;