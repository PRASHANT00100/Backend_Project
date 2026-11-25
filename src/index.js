import dotenv from 'dotenv'
import DBconnect from './db/index.js';
import { app } from './app.js';

dotenv.config({path : './env'});

DBconnect()
.then(() => {app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`server is listning at ${process.env.PORT}`);    
})})
.catch((err)=>{
    console.log(err);
});