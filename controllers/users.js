const { json } = require('express')
const User = require('../models/user')

//manually giving input
const createUser = async (req, res) => {
    try {
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            DOB: req.body.DOB,
            email: req.body.email,
            city: req.body.city,
            country: req.body.country,
            pincode: req.body.pincode
        })
        res.status(201).json({ user })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}
//sending input through postman
/*const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}*/



const getAllUsers = async (req, res) => {
    try {
        const Users = await User.find({})

        res.status(200).json({ Users })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getUserId = async (req, res) => {
    try {
        const { id: userID } = req.params
        const user = await User.findOne({ _id: userID })
        if (!user) {
            return res.status(404).json({ msg: `No user with id : ${userID}` })
        }
        res.status(200).json({ user })

    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}


//to update the user details
const updateUser = async (req, res) => {

    try {
        const paramsResult = req.params
        const data = req.body
        const user = await User.findOneAndUpdate({ _id: paramsResult.id }, data)
        if (!user) {
            res.status(404).json({ msg: `No user with id : ${paramsResult.id}` })
        }
        res.json({ user })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = { createUser, getAllUsers, getUserId, updateUser }