const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    recipeId: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', PostSchema);