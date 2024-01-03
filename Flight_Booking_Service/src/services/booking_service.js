const {BookingRepository}=require("../repository/index")
const {FLIGHT_SERVICE_PATH}=require("../config/serverConfig")
const axios=require("axios");
const { ServiceError } = require("../utils/errors");
const booking = require("../models/booking");
class BookingService{
    constructor(){
        this.BookingRepository=new BookingRepository();
    }
    async create(data){
        try {
            const flightId=data.flightId;
            const flightURL=`${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight=await axios.get(flightURL);
            const flightPrice=flight.data.data.cost;
            if(data.noOfSeats>flight.data.data.totalSeats){
                throw new ServiceError("Seats insufficient")
            }
            const totalCost=flightPrice * data.noOfSeats;
            const booking=await this.BookingRepository.create({...data,totalCost});
            const updateFlightURL=`${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightURL,{totalSeats:(flight.data.data.totalSeats-booking.noOfSeats)})
            const finalBooking=await this.BookingRepository.updateBooking(booking.id,{status:"Booked"})
            return finalBooking;
        } catch (error) {
            if(error.name=="RepositoryError" || error.name=="SequelizeValidationError"){
                console.log(error)
            }
            console.log(error)
            throw new ServiceError();
        }
    }
}
module.exports=BookingService