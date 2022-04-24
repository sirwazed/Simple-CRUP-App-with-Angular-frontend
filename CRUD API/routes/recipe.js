const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get back all the post
router.get('/', async (req, res) => {
    try{
        const recipe = await Recipe.find();
        res.json(recipe);
    }catch(err) {
        res.json({message: err});
    }
})

// Add a post
router.post('/', async (req,res) => {
    const recipe = new Recipe({
        recipeId: req.body.recipeId,
        ingredients: req.body.ingredients,
        instruction: req.body.instruction
    });

    try{
        const savedRecipe = await recipe.save();
    res.json(savedRecipe);
    } catch (err) {
        res.json({message: err});
    }
    
})
// Get a specifiq post
router.get('/:id', async (req,res) => {
    try {
        const recipe = await Recipe.findOne({recipeId: req.params.id});
        res.json(recipe);
    }catch(err) {
        res.json({message: err});
    }
})

// Delete a specifiq post
router.delete('/:id', async (req, res) => {
    try{
        const removedRecipe = await Recipe.remove({recipeId: req.params.id});
        res.json(removedRecipe);
    }catch(err) {
        res.json({message: err});
    }
})

// Update a post
router.patch('/:id', async (req, res) => {
    try{
        const updatedRecipe = await Recipe.updateOne(
            {recipeId: req.params.id}, 
            {$set: {recipeId: req.body.recipeId,
                ingredients: req.body.ingredients,
                instruction: req.body.instruction}
        });
        res.json(updatedRecipe);
    }catch(err) {
        res.json({message: err});
    }
})

module.exports = router;