import React from "react";
import Mongoose from "mongoose";
const schema = Mongoose.Schema;

const ArticleSchema = new Schema({
    // `title` is required and of type String
    title: {
      type: String,
      required: true,
      unique: true
    },
    authors: {
        type: String
        required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
        type: String
        required: true
    },
    // `link` is required and of type String
    link: {
      type: String,
      required: true
    }
    
  });