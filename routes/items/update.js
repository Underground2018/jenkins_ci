const router = require('express').Router();
const Item = require('../../models/Items');

router.put('/:id', (req,res, next) => {
    Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(itemUpdate => {
        return res.status(200).json(itemUpdate)
    }).catch(err => {
        return res.status(500).json({
            msg: 'Unable to update data'
        })
    })
})


module.exports = router