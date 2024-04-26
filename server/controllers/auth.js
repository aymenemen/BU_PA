import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../modals/User.js";
 

//REGISTER 
export const register = async (req,res)=>{
    try{
        const {
                firstName,
                lastName,
                email,
                password,
                picturePath,
           
        }=req.body;
        const salt = await bycrypt.genSalt();
        const passwordHash= await bycrypt.hash(password,salt); 
        const NewUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            
        })
        const savedUser= await NewUser.save();
        res.status(201).json(savedUser);
    }catch (err){
        res.status(500).json({error:err.message})
    }
};

// log in
export const login = async (req,res)=>{
    try{
        const { email, password}= req.body;
        const user= await User.findOne({email: email});
        if(!user)return res.status(400).json({msg:"User does not exist"});

        const isMatch= await bycrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg:"Invalid Credentials."});

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
        delete user.password;

        res.status(200).json({ token, user })

    }catch (err){
        res.status(500).json({error:err.message})   
    }
}