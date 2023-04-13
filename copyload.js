require("dotenv").config();

const connectDB =require('./db/connect');

const Schema = require('./models/student');

const vidyarthijson = require("./copyvidyarthi.json")

const start = async () => {

    try {
        await connectDB(process.env.MONGODB_URL)
        await Schema.create(vidyarthijson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();