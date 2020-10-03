const mongoose = require('mongoose');
const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true
};

const homeAddressSchema = new Schema({
    absen: {
        ...requiredNumber,
        unique: true,
        min:0,
        max:33,
    },
    description: String,
    image: String,
    latitude: {
        ...requiredNumber,
        min: -90,
        max:90,
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
    },
}, {
    timestamps: true,
});

const HomeAddress = mongoose.model('HomeAddress', homeAddressSchema);

module.exports = HomeAddress;