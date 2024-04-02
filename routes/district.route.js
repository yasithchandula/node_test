const express = require ('express');
const { addDistrict,getAllDistricts,} = require('../controllers/district.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//add district route
router.post('/addDistrict',verifyJWT,addDistrict);

//get all districts route
router.get('/getDistricts',verifyJWT,getAllDistricts);



module.exports = router;