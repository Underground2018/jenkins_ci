const router = require('express').Router();
const User = require('../../models/User');

router.post('/', (req,res,next)=> {

   const user = new User(req.body);
   user.save()
   .then(savedUser => {
        return res.status(201).json(savedUser)
    }).catch(err => {
        return res.status(500).json({msg: 'Unable to save user'})
    }) 
})

module.exports = router;