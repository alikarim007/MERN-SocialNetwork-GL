//=
import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/auth.js';


const app = express();
const PORT = 7000;

app.use(express.json());
app.use(router);

app.listen(PORT,() => {
    console.log("SERVER running on:", PORT )
});

const CONECTIONURL = 'mongodb+srv://glproject:glproject@cluster0.ai3cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONECTIONURL).then(()=>{
    console.log(`SERVER is connected to MongoDB from: ${PORT}`);
})



