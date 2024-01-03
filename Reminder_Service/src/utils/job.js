const cron=require("node-cron")
const emailService=require("../services/email_service")
const sender=require("../config/email_config")

const setUpJobs=()=>{
    cron.schedule('*/1 * * * *',async ()=>{
        const response=await emailService.fetchPendingEmails();
        response.forEach(element => {
            // emailService.sendBasicEmail("airline@abc.com",element.recipientEmail,element.subject,element.content);
            sender.sendMail({
                from:"airline@abc.com",
                to:element.recipientEmail,
                subject:element.subject,
                text:element.content
            },async (err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                    await emailService.updateStatus(element.id,{status:"SUCCESS"})
                }
            })
        });
    })
}
module.exports=setUpJobs;