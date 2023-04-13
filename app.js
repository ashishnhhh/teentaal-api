require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const info_routes = require("./router/infoR");

const PORT = process.env.PORT || 3000;

app.get("/",(req,res) =>{
    res.send('hi server alive');
});


app.use("/info", info_routes);
const start = async() =>{
     
    try{
       await connectDB(process.env.MONGODB_URL);

        app.listen(PORT, () => {
            console.log(`${PORT} yes iam listning`)
        });

    }catch{
        console.log(error);
    }
};

start();