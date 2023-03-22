const express = require('express');
const Recipe = require('../models/recipeModel');

const router = express.Router()

// GET ALL recipes
router.get('/', (req, res) => {
    res.json({ msg: 'get ALL recipes' })
})

router.get('/:id', (req, res) => {
    res.json({ msg: 'GET SINGLE recipe' })
})

router.post('/', async (req, res) => {
    const { title, ingredients, steps } = req.body;
    try {
        const recipe = await Recipe.create({title, ingredients, steps});
        res.status(200).json(recipe)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE recipe' })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE recipe' })
})

module.exports = router;