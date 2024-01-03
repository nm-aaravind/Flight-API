const sender=require("../config/email_config")
const TicketRepository=require('../repository/ticket_repository')
const repo=new TicketRepository();
const sendBasicEmail=async (mailFrom,mailTo,mailSubject,mailBody)=>{
    try {
        let obj=await sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        })
    } catch (error) {
        console.log(error)
    }
}
const fetchPendingEmails= async (timestamp)=>{
    try {
        const response=repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error)
    }
}
const updateStatus=async (emailId,data)=>{
    try {
        const response=await repo.updateStatus(emailId,data);
        return response;
    } catch (error) {
        console.log(error)
    }
}
const createNotification=async (data)=>{
    try {
        const result=await repo.create(data);
        return result;
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateStatus
}