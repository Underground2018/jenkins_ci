const router = require('express').Router();
const Item = require('../../models/Items');

router.get('/', (req,res, next) => {

const pageSize = 20
const currentPage = req.query.page > 0 ? req.query.page - 1 : 0
const filter = req.query.filter || ''
const filterOn = req.query.filterOn || ''
const sortBy = req.query.sortBy || 'content'
const orderBy = req.query.orderBy || 'asc'
const sortQuery = {
    [sortBy]: orderBy
}
let filterQuery = {}
if(filter.lenght > 0) {
    if(filterOn.lenght > 0) {
        filterQuery = {
            [filterOn]: filter
        }
    }  else {
        filterQuery = {
            content: filter
        }
     }
}
Item.countDocuments(filterQuery)
.then(itemcount => {
    if(currentPage * pageSize > itemcount) {
        return res.status(400).json([])
    }
    Item.find(filterQuery)
    .limit(pageSize)
    .skip(currentPage * pageSize)
    .sort(sortQuery)
    .then(items => {
        return res.status(200).json({
            content: items,
            page: req.query.page || 1,
            total: itemcount,
            limit: pageSize})
    })
}).catch(err => {
        return res.status(500).json({
            msg: 'Error, unable to get users'
        })
    })
})

router.get('/:id', (req,res,next) => {
    Item.findOne({_id: req.params.id})
    .then(item => {
        return res.status(200).json(item)
    })
    .catch(err => {
        return res.status(500).json({ 
            msg:'Unable to read data'
         })
    })
})

module.exports = router