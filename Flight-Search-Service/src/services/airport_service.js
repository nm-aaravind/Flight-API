const {AirportRepository}=require("../repository/index")
async function createAirport(data){
    try {
        console.log(data);
        const airport=await AirportRepository.createAirport(data);
        return airport;
    } catch (error) {
        console.log("Got error in service of createAirport")
    }
}
async function updateAirport(airportId,data){
    try {
        const airport=await AirportRepository.updateAirport(airportId,data);
        return airport;
    } catch (error) {
        console.log("Got error in service of updateairport")
    }
}
async function deleteAirport(airportId){
    try {
        await AirportRepository.deleteAirport(airportId);
        return true;
    } catch (error) {
        console.log("Got error in service of deleteairport")
    }
}
async function airportOfCity(cityId){
    try {
        const airports=await AirportRepository.airportsOfCity(cityId);
        return airports;
    } catch (error) {
        console.log("Got error in service of airportsofcity")
    }
}
async function getAirport(airportId){
    try {
        const airport=await AirportRepository.getAirport(airportId);
        return airport;
    } catch (error) {
        console.log("Got error in service of getAirport")
    }
}
async function getAllAirports(filter){
    try {
        const airports=await AirportRepository.getAllAirports(filter);
        return airports;
    } catch (error) {
        console.log("Got error in service of getallairports");
    }
}
module.exports={
    createAirport,updateAirport,deleteAirport,getAirport,getAllAirports,airportOfCity
}