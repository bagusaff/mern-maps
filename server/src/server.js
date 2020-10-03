const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const address = require('./routes/address');

const app = express();

app.enable('trust proxy');

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}),

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message: 'halo',
    });
});

app.use('/api/address',address);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Berjalan pada http://localhost:',port);
});