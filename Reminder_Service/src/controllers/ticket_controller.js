const NotificationService=require("../services/email_service");
const create=async(req,res)=>{
    try {
        const result=await NotificationService.createNotification(req.body)
        return res.status(201).json({
            data:result,
            success:true,
            message:"Created noti ticket"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Cannot create noti"
        })
    }
}
module.exports={
    create
}