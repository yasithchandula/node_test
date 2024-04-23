const express = require('express');
const {addItem, getAllItem} = require('../controllers/item.controller');
const router=express.Router();

//add district route
router.post('/addItem',addItem);

//get all districts route
router.get('/getItems',getAllItem);

module.exports = router;

