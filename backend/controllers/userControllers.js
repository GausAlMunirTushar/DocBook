const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const {email} = req.body
    try {
        const existingUser = await userModel.findOne({email: email})
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'User Alredy Exist'
            })
        }
        const password = req.body.password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({
            success: true,
            message: 'Register Successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${error.message}`
        })
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email})
        if(!user){
            return res.status(200).send({
                message: 'User not Found'
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            return res.status(200).send({
                message: 'Invalid Email or Password'
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.status(200).send({message: 'Login Success', success: true, token})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: `${error.message}`
        })
    }
}
const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        if(!user){
            return res.status(200).send({
                message: 'user not found',
                success: false
            })
        }else{
            res.status(200).send({
                success: true,
                data:{
                    name: user.name,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Auth Error",
            success: false,
            error
        })
    }
}
module.exports = {
    register,
    login,
    authController
}