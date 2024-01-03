const {FlightService}=require("../services/index")
const flightservice=new FlightService();
const {SuccessCodes}=require("../utils/error_codes")
const create=async (req,res)=>{
    try {
        let flightReqBody={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,
            arrivalTime:req.body.arrivalTime,
            cost:req.body.cost
        }
        const flights=await flightservice.createFlight(flightReqBody);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            err:{},
            message:"Created flight"
        })
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:"Canont create flight",
            err:error
        })
    }
}
const getAllFlights=async(req,res)=>{
    try {
        const flights=await flightservice.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Fetched flights based on filter"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot fetch based on filter"
        })
    }
}
const getFlight=async (req,res)=>{
    try {
        const flight=await flightservice.getFlight(req.params.id)   
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Fetched flight"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot fetch flight"
        })
    }
}
const updateFlight=async(req,res)=>{
    try {
        const response=await flightservice.updateFlight(req.params.id,req.body)
        return res.status(200).json({
            data:response,
            success:response,
            message:"Success"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot update"
        })
    }
}
module.exports={
    create,getAllFlights,getFlight,updateFlight
}