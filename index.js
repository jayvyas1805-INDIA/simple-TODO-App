import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRoutes from './Routes/todoRoutes.js';

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1',todoRoutes);

const server = async()=>{
    try {
        await connectDB();

        app.listen(process.env.PORT || 5000, ()=>{
            console.log("server started", process.env.PORT)
        })
    } catch (error) {
        console.log("ERROR->",error)
    }
}

server();