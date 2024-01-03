const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const {PORT,DB_SYNC}=require("./config/serverConfig")
const apiRoutes=require("./routes/index")
const db=require("./models/index")
function createAndSetupServer(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",apiRoutes)
    app.listen(PORT,()=>{
        console.log("Server started on PORT",PORT)
    })
    // if(DB_SYNC){
    //     db.sequelize.sync({alter:true})
    // }
}
createAndSetupServer();
