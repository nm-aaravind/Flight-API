const {BookingService}=require("../services/index");
const {StatusCodes}=require("http-status-codes")
const bookingService=new BookingService();
const create=async (req,res)=>{
    try {
        const booking=await bookingService.create(req.body);
        return res.status(StatusCodes.OK).json({
            data:booking,
            success:true,
            message:"Created booking"
        })
    } catch (error) {
        res.status(error.statusCode).json({
            success:false,
            message:error.message,
            explanation:error.explanation
        })
    }
}
module.exports={
    create
}