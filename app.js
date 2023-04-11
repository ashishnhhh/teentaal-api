const express = require('express');
const app = express();

const info_routes = require("./router/infoR");

const PORT = process.env.PORT || 3000;

app.get("/",(res,req) =>{
    res.send('hi server alive');
});


app.use("/info", info_routes);
const start = async() =>{
    try{
        app.listen(PORT, () => {
            console.log(`${PORT} yes iam listning`)
        })

    }catch{
        console.log(error);
    }
};

start();