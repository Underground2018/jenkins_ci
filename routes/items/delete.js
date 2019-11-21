const router = require('express').Router();
const Item = require('../../models/Items');

router.delete('/:id', (req,res, next) => {
   Item.findByIdAndDelete({_id: req.params.id})
   .then(result => {
       return res.status(204).json(result)
   })
   .catch(err => {
       return res.status(504).json('Error delete:', err)
   })
})



module.exports = router