import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Mongo DB Connected Successfully');
}).catch(err => {
    console.log(err);
});


const app = express();

app.listen(3000, () => {
    console.log('Server is running on 3000 port !');
})