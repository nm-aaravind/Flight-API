const nodemailer=require("nodemailer")
const {EMAIL_ID,EMAIL_PW}=require("../config/serverConfig")

const sender=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: EMAIL_ID,
        pass: EMAIL_PW
    }
});
module.exports=sender;