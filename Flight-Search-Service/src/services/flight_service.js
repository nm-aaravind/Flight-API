const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
    constructor(){
        this.flightrepository=new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival lesser than departure" }
            }
            const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats: airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Got error in service of createflight")
        }
    }
    async getAllFlights(filter){
        try {
            const flights=await this.flightrepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Got error in service of getallfligths")
        }
    }
    async getFlight(flightId){
        try {
            const flight=await this.flightrepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Got error in service of getflight")
        }
    }
    async updateFlight(flightId,data){
        try {
            const flight=await this.flightrepository.updateFlight(flightId,data)
            return flight;
        } catch (error) {
            console.log("got error in service of updateflight")
        }
    }
}
module.exports = FlightService;
/**
 * flightnumber
 * airplaneid
 * departureairportid
 * arrivalairportid
 * arrivaltime
 * departuretime
 * price
 * totalseats
 */