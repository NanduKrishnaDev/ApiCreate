const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    href:{
        type:String
    },
    thumbnail:{
        type:String
    },
    ingredients:{
        type:Array,
        required:true
    }

});

module.exports = mongoose.model('Recipe',recipeSchema);