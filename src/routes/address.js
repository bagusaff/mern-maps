const {Router} = require('express');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');

const HomeAddress = require('../models/HomeAddress');

const {
    API_KEY,
    DATABASE_URL,
} = process.env;

const router = Router();

const rateLimitDelay = 10*1000; // delay 10 detik
const limiter = new RateLimit({
    store: new MongoStore({
        uri: DATABASE_URL,
        expireTimeMs: rateLimitDelay,
    }),
    max:1,
    windowMs:rateLimitDelay
});

router.get('/', async(req,res,next)=>{
    try {
        const addressList= await HomeAddress.find();
        res.json(addressList);
    } catch (error) {
        next(error);
    }
});

router.post('/',limiter,async(req,res,next)=>{
    try{
        if(req.get('X-API-KEY') !== API_KEY){
            res.status(401);
            throw new Error('UnAuthorized');
        }
        const homeAddress = new HomeAddress(req.body);
        const createdAddress = await homeAddress.save();
        res.json(createdAddress);
    } catch (error){
        if (error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});

module.exports=router;