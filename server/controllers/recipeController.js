const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');

// GET all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });

    if (recipes) {
        res.status(200).json(recipes)
    }
}
// GET single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(401).json({ error: 'recipe does not exist' })
    }

    const recipe = await Recipe.findById(id);
    if (!recipe) {
        return res.status(404).json({ err: "recipe does not exist" })
    }
    res.status(200).json(recipe)
}


// CREATE recipe
const createRecipe = async (req, res) => {
    const { title, ingredients, steps } = req.body;
    try {
        const recipe = await Recipe.create({ title, ingredients, steps });
        res.status(201).json(recipe)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

// DELETE recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(401).json({ error: 'recipe does not exist' })
    }

    const recipe = await Recipe.findOneAndDelete({ _id: id })

    if (!recipe) {
        return res.status(404).json({ err: "recipe does not exist" })
    }

    res.status(200).json(workout);
}

// EDIT recipe
const editRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(401).json({ error: 'recipe does not exist' })
    }

    const recipe = await Recipe.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!recipe) {
        return res.status(404).json({ err: "recipe does not exist" })
    }

    res.status(200).json(recipe);
}


module.exports = { getRecipes, getRecipe, createRecipe, deleteRecipe, editRecipe }