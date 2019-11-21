const router = require('express').Router();
const User = require('../../models/User');


router.delete('/:id', (req,res, next) => {
    User.findByIdAndDelete({_id: req.params.id})
    .then(result => {
        return res.status(204).json(result)
    })
    .catch(err => {
        return res.status(504).json('Error delete:', err)
    })
 })


module.exports = router