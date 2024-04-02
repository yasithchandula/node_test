const express = require ('express');
const { addWeatherRecord,deleteWeatherRecord,getExpiredWeatherForecasts,getNonExpiredWeatherForecasts } = require('../controllers/weatherCast.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//add weatehr route
router.post('/addrecord',verifyJWT,addWeatherRecord);

//deleteweather route
router.post('/deleterecord/:id',verifyJWT,deleteWeatherRecord);

//get expired weather forecast
router.get('/getexpired',verifyJWT,getExpiredWeatherForecasts);

//get non expired weather forecast
router.get('/getnonExpired',verifyJWT,getNonExpiredWeatherForecasts);

module.exports = router;