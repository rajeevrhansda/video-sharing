import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();



const connect = () => {
    mongoose
    .connect(process.env.URI)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        throw err;
    })
};

app.get('/', (req, res) => {
    res.send('MongoDB Server!')
});

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});