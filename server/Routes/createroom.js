import express from 'express';
const router = express.Router();

import Room from '../Models/room.models.js';
import {v4 as uuidv4} from 'uuid'; //Used to generate Unique roomId


router.post('/', async (req, res) => {
    try{
        const{name, password} = req.body;

        if(!name || !password)
            return res.status(400).json({ message: "Name and password are required" });


        //New room creating
        const newRoom = new Room({
            roomId: uuidv4(), //hidden unique roomId
            roomName: name,
            password
        });

        //Saving to db
        await newRoom.save();

        res.status(201).json({
            message: "Room created Successfully",
            room: {
                roomId: newRoom.roomId,
                roomName: newRoom.roomName,
                roomUrl: `/synapse/home/room/${newRoom.roomId}` //This URL can be used by the frontend for redirect part.
            }
        });
        
    } catch(err){
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;