//This file is used to communicate with city service
const { CityService }=require("../services/index")
const {SuccessCodes}=require("../utils/error_codes")
//segragate all the middlewares at one place. controllers at one place, routes in one place.
//Controller is also a type of final middleware.

//POST, info in req.body
const create=async (req,res)=>{
    try {
        const city=await CityService.createCity(req.body);
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message:"Successfully created city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city"
        })
    }
}

//Delete req. id send in /city/:id req.params.id
const destroy=async (req,res)=>{
    try {
        const city=await CityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message:"Deleted city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city"
        })
    }
}

//get request, /city/:id
const get=async (req,res)=>{
    try {
        const city=await CityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: "Fetched city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get city"
        })
    }
}

const createMany=async (req,res)=>{
    try {
        const cities=await CityService.createManyCities(req.body);
        return res.status(SuccessCodes.OK).json({
            data:cities,
            success:true,
            message:"Created many cities"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot create many cities"
        })
    }
}
const getAll=async (req,res)=>{
    try {
        const cities=await CityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data:cities,
            success:true,
            message:"Fetched all cities"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch cities"
        })
    }
}
//Patch,/city/id, data in body
const update=async (req,res)=>{
    try {
        const city=await CityService.updateCity(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: "Updated city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update city"
        })
    }
}
module.exports={
    create,destroy,get,update,getAll,createMany
}
