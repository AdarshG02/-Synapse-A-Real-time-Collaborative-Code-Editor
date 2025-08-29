import dotenv from 'dotenv';
dotenv.config({path: './env'});


import express from 'express';
import authRoutes from './Routes/auth.js';

import cors from 'cors';


import connectDB from './DB/index.js';
connectDB(); //Database connection

const app = express();
const port = process.env.PORT || 3000;

//Middleware and cors
app.use(cors());
app.use(express.json());

//Landing page
app.get('/synapse', (req, res) =>{
    res.send("Landing Page. Login or signup");
});

app.use("/synapse", authRoutes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});