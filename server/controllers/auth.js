import mongoose from "mongoose";
import User from "../models/User.js"

export const signup = async (req, res, next) => {
    console.log(req.body);
//     try{
//         const newUser = new User(req.body);
//     }catch(err){
        
//     }
};

export const signin = async (req, res, next) => {
}

export const googleAuth = async (req, res, next) => {
}