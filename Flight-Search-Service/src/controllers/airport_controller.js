const {AirportService}=require("../services/index");
const {SuccessCodes}=require("../utils/error_codes")
const create=async (req,res)=>{
    try {
        const airport=await AirportService.createAirport(req.body)
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"Created airport"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot create airport"
        })
    }
}
const airportofCity=async (req,res)=>{
    try {
        const airports=await AirportService.airportOfCity(req.params.id)
        return res.status(SuccessCodes.OK).json({
            data:airports,
            success:true,
            message:"Got airports of city"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Canot fetch airports of city"
        })
    }
}
const destroy=async (req,res)=>{
    try {
        const response=await AirportService.deleteAirport(req.params.id)
        return res.status(SuccessCodes.OK).json({
            success:response,
            message:"Deleted airport"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot delete airport"
        })
    }
}
const update=async (req,res)=>{
    try {
        const airport=await AirportService.updateAirport(req.params.id,req.body)
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"updated airport"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot update airport"
        })
    }
}
const get=async (req,res)=>{
    try {
        const airport=await AirportService.getAirport(req.params.id)
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"fetched airport"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot fetch airport"
        })
    }
}
const getAll=async (req,res)=>{
    try {
        const airport=await AirportService.getAllAirports(req.query)
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"fetched all airport"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot fetch all airport"
        })
    }
}
module.exports={
    create,destroy,get,getAll,update,airportofCity
}