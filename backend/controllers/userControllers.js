import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import validator from 'validator'


//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user) {
            return res.josn({success:false,message:"User Doesn't Exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.josn({success:false, message:"Invalid credentail"})
        }
        const token = createToken(user.id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//API for register user
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try {
        //checking is user already exists
        const exists = await userModel.findOne({email})
        if(exists) {
            return res.josn({success:false,message:"User Already exists"})
        }

        //Validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.josn({success:false, message:"Please Enter a Valid Email"})
        }

        if(password.length < 8) {
            return res.json({success:false,message:"Please Enter a Strong Password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
          
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}


export {loginUser,registerUser}