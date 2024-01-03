const { ClientErrorCodes}=require("../utils/error_codes")
const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber|| !req.body.airplaneId || !req.body.departureAirportId ||
        !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime 
        || !req.body.cost){
            return res.status(ClientErrorCodes.BAD_REQUEST).json({
                data:{},
                success:false,
                message:"Invalid request body",
                error:"Missing mandatory properties"
            })
        }
    next();
}
module.exports={
    validateCreateFlight
}