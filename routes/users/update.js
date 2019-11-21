const router = require('express').Router();
const User = require('../../models/User');

router.put('/:id', (req,res, next) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(userUpdate => {
        return res.status(200).json(userUpdate)
    }).catch(err => {
        return res.status(500).json({
            msg: 'Unable to update data'
        })
    })
})

module.exports = router