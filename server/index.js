import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
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

app.use("/api/users", userRoutes);

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});