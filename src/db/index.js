 import mongoose from "mongoose";
 import { Db_Name } from "../constant.js";

 const DBconnect = async()=>{
    try {
     const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URL} / ${Db_Name}`);
     console.log(`Mongodb is connected ${ConnectionInstance.connection.host}`);
     
    } catch (error) {
        console.log("Error : " + error);
        process.exit(1);   
    }
 } ;

 export default DBconnect ;