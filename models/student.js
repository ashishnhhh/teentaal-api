const { defaults } = require('json-server');
const mongoose = require('mongoose');

const vidyarthiinfoschema = new mongoose.Schema({
        
       district:{
        type:String,
        required:true
       },
       College_Name:{
        type:String,
        required:true
       },
       CollegeCodeID:{
        type:String,
        required:true
       }

    

});

module.exports =  mongoose.model("vidyarthiinfo", vidyarthiinfoschema);