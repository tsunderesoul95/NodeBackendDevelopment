import dotenv from 'dotenv'
import connectDB from "./src/db/index.js";
import { app } from './src/app.js';

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



















/*const app = express()
const connectDB = (async () => {
    try {
       await mongoose.connect (`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error",(error)=> {
        console.log("Error: ",error);
        throw error
       })
       app.listen(process.env.PORT,() =>{
        console.log(`App is listening to port ${process.env.PORT}`);
       })
    }
    catch (error) {
        console.error("Error:",error);
        throw error
    }

})()
export default connectDB*/