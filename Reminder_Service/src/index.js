const express=require("express")
const bodyParser=require("body-parser")
const {PORT}=require("./config/serverConfig")
const {sendBasicEmail}=require('./services/email_service')
const jobs=require("./utils/job")
const TicketController=require("./controllers/ticket_controller")
function setupAndStartServer(){
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log("Server started in PORT",PORT)
        jobs();
        app.post("/api/v1/tickets",TicketController.create)
    });
}
setupAndStartServer()