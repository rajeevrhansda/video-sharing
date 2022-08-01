import mongoose from 'mongoose';
import express from 'express';
const app = express();


main()
.then(console.log("DB Connect"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://admin:qweasd@cluster0-shard-00-00.k72iz.mongodb.net:27017,cluster0-shard-00-01.k72iz.mongodb.net:27017,cluster0-shard-00-02.k72iz.mongodb.net:27017/myDB?ssl=true&replicaSet=atlas-27vl2r-shard-0&authSource=admin&retryWrites=true&w=majority');
};

app.get('/', (req, res)=>{
    res.send('MongoDB Server!')
});

app.listen(8800, () => {
    console.log("Server is running");
});