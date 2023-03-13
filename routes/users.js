const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, getUserId, updateUser,deleteUser } = require('../controllers/users')



//getting all users
//router.route('/').get((req, res) => {
//    res.send('All Users')

//})

/*
router.get('/:id',(req,res)=>{
 res.send('User with id')
})
*/

/*
router.post('/',(req,res)=>{
 res.send('Created user with id')
})
*/

/*
router.put('/:id',(req,res)=>{
 res.send('Updated user with id')
})
*/




router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUserId).put(updateUser).delete(deleteUser)


module.exports = router


