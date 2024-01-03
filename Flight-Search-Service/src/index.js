const express=require("express");
const {PORT}=require("./config/serverConfig.js")
const bodyParser=require("body-parser");
const cityRepository=require("./repository/city_repository.js")
const apiRouter=require("./routes/index");
const db=require("./models/index")
// const =require("./models/index")
const createAndSetupServer=async () => {
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api",apiRouter);
    app.listen(3000,async ()=>{
        console.log("Server started with PORT",PORT);
        // db.sequelize.sync({alter:true})
    })
}
createAndSetupServer();
