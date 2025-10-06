import dotenv from 'dotenv';
dotenv.config({path: './env'});


import express from 'express';
const app = express();

import cors from 'cors';

import connectDB from './DB/index.js';
connectDB(); //Database connection



//Routes importing
import authRoutes from './Routes/auth.js';
import homeRoute from './Routes/home.js';

//Socket related stuffs
import setupSocket from "./socket/editor.socket.js";
import { createServer } from 'node:http';

const server = createServer(app);
const io = new setupSocket(server);


const port = process.env.PORT || 3000;

//Middleware and cors
app.use(cors());
app.use(express.json());


//Login or Signup page
app.use('/synapse', authRoutes);

//Home page
app.use('/synapse/home', homeRoute);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});