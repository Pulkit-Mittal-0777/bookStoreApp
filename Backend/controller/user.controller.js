import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signup = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'user already exist' })
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const created_user = new User(
            {
                username: username,
                email: email,
                password: hashPassword
            })

        await created_user.save()
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: created_user._id,
                username: created_user.username,
                email: created_user.email,
            },
        });
    }
    catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401), json({ message: "wrong username or password" })
        }

        const data = {
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            }
        }
        const SECRET_KEY = process.env.JWT_SECRET_KEY
        const token = jwt.sign(
            { id: user._id },
            SECRET_KEY,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(200).json(
            {
                message: "user loggedin successfully",
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                },
                token: token
            }
        )

    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const me=async (req,res)=>{
    
    try{
        
        const user=await User.findById(req.userId).select("-password");
        res.json(user)
    }   
    catch(error){
        res.status(500).json({message:"internal server error"})
    } 
}

export const logout = (req, res) => {
    // console.log("heyyyyy!!!")
    try {

        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",

        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Logout failed"
        });
    }
}