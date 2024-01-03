const {Booking}=require("../models/index");
const {ValidationError,ServiceError,AppError}=require("../utils/errors/index")
const { StatusCodes }=require("http-status-codes")
class BookingRepository{
    async create(data){
        try {
            const result=await Booking.create(data);
            return result;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError("RepositoryError","Cannot create booking","Try again later, server issue",StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
    async updateBooking(bookingId,data){
        try {
            const obj=await Booking.findByPk(bookingId);
            if(data.status){
                obj.status=data.status;
            }
            if(data.totalSeats){
                obj.totalSeats=data.totalSeats
            }
            await obj.save();
            return obj;
        } catch (error) {
            throw new AppError();
        }
    }
}
module.exports=BookingRepository;