const router = require('express').Router();

router.get('/', (req,res, next) => {
    return res.status(200).json({msg: 'api endpoint running'});
})

router.use('/users', require('./users'))

router.use('/items', require('./items'))

module.exports = router