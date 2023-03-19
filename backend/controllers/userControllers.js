const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')


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

const login = () => {

}

module.exports = {
    register,
    login
}