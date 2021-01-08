const express = require('express');
const  mongoose  = require('mongoose');
const router = express.Router();
const Recipe = require('../models/recipe');

// fetching the data
router.get('/:rec1/:rec2',(req,res,next)=>{
    const rec1 = req.params.rec1;
    const rec2 = req.params.rec2;
    Recipe.find({ingredients:rec1 , ingredients:rec2})
    .exec()
    .then(docs=>{
        res.status(200).json(docs)
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
   
    
});

// posting the data
router.post('/',(req,res,next)=>{
    const recipe = new Recipe({
        title:req.body.title,
        thumbnail:req.body.thumbnail,
        ingredients:req.body.ingredients
    });

    recipe.save().then(result=>{
        console.log(result)
        res.status(200).json({
            message:'new recipe added ',
            recipe:recipe
        });

    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
   
});
module.exports = router;