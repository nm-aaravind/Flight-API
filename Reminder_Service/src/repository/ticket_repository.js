const { NotificationTicket }=require("../models/index")
const {Op}=require("sequelize")
class TicketRepository{
    async getAll(){
        try {
            const tickets=await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log("Error in getall repo")
            console.log(error)
        }
    }
    async create(data){
        try {
            const ticket=await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error)
        }
    }
    async get(filter){
        try {
            const result=await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            })
            return result;
        } catch (error) {
            console.log(error)
        }
    }
    async updateStatus(emailId,data){
        try {
            const result=await NotificationTicket.findByPk(emailId);
            result.status=data.status;
            await result.save();
            return true;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=TicketRepository; 