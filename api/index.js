import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './Routes/UserRoutes.js'
import AuthRoutes from './Routes/AuthRoutes.js'
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Mongo DB Connected Successfully');
}).catch(err => {
    console.log(err);
});


const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on 3000 port !');
})

app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})