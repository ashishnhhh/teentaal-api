const { defaults } = require('json-server');
const mongoose = require('mongoose');

const infoschema = new mongoose.Schema({
        
       district:{
              kind: 'required',
              path: 'district',
              value: 20,
              reason: 'this is required',
       },
       collegeName:{
              kind: 'required',
              path: 'collegeName',
              value: 20,
              reason: 'this is required',
       },
       collegeID:{
              kind: 'required',
              path: 'collegeID',
              value: 20,
              reason: 'this is required',
       }

    

});

module.exports =  mongoose.model("vidyarthiinfo", infoschema);