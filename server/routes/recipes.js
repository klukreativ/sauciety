const express = require('express');
const { getRecipes, getRecipe, createRecipe, deleteRecipe, editRecipe } = require('../controllers/recipeController');

const router = express.Router()

// GET ALL recipes
router.get('/', getRecipes)
router.get('/:id', getRecipe)
router.post('/', createRecipe)
router.delete('/:id', deleteRecipe)
router.patch('/:id', editRecipe)

module.exports = router;