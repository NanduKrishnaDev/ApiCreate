const express = require('express');
const app = express();
const recipe = require('./api/routes/recipes');
const cors = require('cors')

const mongoose = require('mongoose')//used to connct with mongoDB

mongoose.connect('mongodb+srv://nandu:'+ process.env.MONGO_ATLAS_PW + '@cluster0.9ubru.mongodb.net/sample?retryWrites=true&w=majority')


const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/recipe',(recipe))//main router





app.use((req,res,next)=>{    //error handling
    const error = new Error("not found")
    error.status=404;
    next(error);
})
app.use((error,req,res,next) => {
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app;