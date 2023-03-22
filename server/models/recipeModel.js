const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeStepSchema = new Schema({
    step: {
        type: String,
        required: true
    }
});

const ingredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true
    },
    measurement: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [ingredientSchema],
        validate: v => Array.isArray(v) && v.length > 0
    },
    steps: {
        type: [recipeStepSchema],
        validate: v => Array.isArray(v) && v.length > 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);