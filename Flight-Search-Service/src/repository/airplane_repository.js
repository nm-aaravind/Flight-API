const {Airplane}=require("../models/index");
async function getAirplane(id){
    try {
        const airplanes=await Airplane.findByPk(id);
        return airplanes;
    } catch (error) {
        
    }
}
module.exports={
    getAirplane
}