const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, getUserId, updateUser } = require('../controllers/users')



//getting all users
//router.route('/').get((req, res) => {
//    res.send('All Users')

//})


router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUserId).put(updateUser)


module.exports = router


