const express=require("express");
const morgan = require("morgan");
const app=express();
const {createProxyMiddleware}=require("http-proxy-middleware");
const { rateLimit } = require("express-rate-limit");
const axios=require("axios");

app.use(morgan('combined'))
const limiter=rateLimit({
    windowMs:2*60*1000,
    max:5
})
app.use("/bookingservice",async (req,res,next)=>{
    try {
        const response=await axios.get("http://localhost:3001/api/v1/isAuthenticated",{
            headers:{
                'x-access-token':req.headers['x-access-token']
            }
        })
        if(response.data.success){
            next();
        }
        else{
            return res.status.json({
                message:"Unauthorized"
            })
        }
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
})
app.use("/bookingservice",createProxyMiddleware({target:'http://localhost:3002',changeOrigin:true}));
app.use(limiter);
app.get("/home",(req,res)=>{
   return res.status(200).json({
    message:"OK"
   })
})
app.listen(3005,()=>{
    console.log("Server started in PORT",3005)
})