const express = require ('express');
const { addCourse, getAllCourse } = require('../controllers/course.controller');
const {verifyJWT} = require('../middleware/verifyJWT');

const router=express.Router();

//route for add course
router.post('/addcourse',verifyJWT,addCourse)

//route for get all course
router.get('/getallcourse',verifyJWT,getAllCourse)

module.exports = router