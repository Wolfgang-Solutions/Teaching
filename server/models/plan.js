const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlanSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    price : {
        type: Number,
        required: true
    }
  },{ collection : 'Plans' });

  const Plans = mongoose.model("Plans", PlanSchema);
  module.exports = Plans;