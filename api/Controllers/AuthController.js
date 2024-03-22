import User from '../Models/User.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../Utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });

    try {
        await newUser.save();
        res.json('Sign Up Successfully');
    } catch (error) {
        next(error);
    }
}