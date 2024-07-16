import express from "express";
import cors from "cors";

const app=express();

app.use(cors());

app.get("/",(req,resp)=>{
    return resp.json({
        msg:"Hello from Server 1",
    })
})

app.listen(4000,()=>{
    console.log("Server 1 running at localhost :", 4000);
})