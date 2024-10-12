const mongoose = require('mongoose');
const {sendVerificationMail} = require('../utils/nodemailer')

const OtpSchema = new mongoose.Schema({
    email:{
        type: String, 
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 60*5,
    }
})

OtpSchema.pre("save", function(next) {
    console.log('Otp doc saved to db');
    if(this.isNew){
        sendVerificationMail(this.email, this.otp).then(()=>{
            next();
        }).catch(next);
    }
    else {
        next();
    }
    
})

const OTP = mongoose.model('OTP', OtpSchema);
module.exports = OTP;
