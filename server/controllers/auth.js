import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)
    try{
        const newUser = new User({...req.body, password: hash});
        await newUser.save();
        res.status(200).send("User has been created");
    }catch(err){
        
    }
};

export const signin = async (req, res, next) => {
}

export const googleAuth = async (req, res, next) => {
}