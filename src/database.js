import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/stack-epica'

// const connectDB = async ()=>{

//     try{
//         await mongoose.connect(url);
//         console.log('BD connectada')
//     }catch(error){
//         console.log(error)
//     }
// }
// connectDB();

mongoose.connect(url);
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('BD conectada')
})
