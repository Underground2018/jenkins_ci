const router = require('express').Router();
const Item = require('../../models/Items');

router.post('/', (req,res,next)=> {
    if(!req.body) {
        return res.status(400).json({
            msg: 'Missing required fields'
        })
    }
   const user = new Item(req.body);
   user.save()
   .then(savedItem => {
        return res.status(201).json(savedItem)
    }).catch(err => {
        return res.status(500).json({msg: 'Unable to save item'})
    }) 
})

module.exports = router;