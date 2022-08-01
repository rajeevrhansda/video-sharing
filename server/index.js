import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import videoRoutes from './routes/videos.js';
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

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});