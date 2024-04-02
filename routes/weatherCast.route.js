const express = require ('express');
const { addWeatherRecord,deleteWeatherRecord,getExpiredWeatherForecasts,getNonExpiredWeatherForecasts } = require('../controllers/weatherCast.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//signup route
router.post('/addrecord',addWeatherRecord);

//login route
router.post('/deleterecord/:id',deleteWeatherRecord);

//get expired weather forecast
router.get('/getexpired',getExpiredWeatherForecasts);

//get non expired weather forecast
router.get('/getnonExpired',verifyJWT,getNonExpiredWeatherForecasts);

module.exports = router;