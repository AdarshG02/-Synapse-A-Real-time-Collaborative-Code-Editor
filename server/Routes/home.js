import express from 'express';
const router = express.Router();

import createRoom from './createroom.js';
import Room from '../Models/room.models.js'; //Transitive imports are not possible in javascript. Hence this was again imported here despite being already imported in creatroom.js.

//Futher, heavy modifications will be made in this folder/perhaps this part after the frontend part is made with React+Vite
router.get('/', (req, res) => {
    res.send("Welcome to the home page of Synapse!");
});



//Createroom mounting in the home route
router.use('/createroom', createRoom);




//Getting into the room, will be developing it later
/*router.get('/userRoom/:roomId', async (req, res) => {     router.use('/userRoom')??
    try{
        const roomId = req.params.roomId;
        const room = await Room.findOne({roomId});

        if(!room){
            return res.status(404).json({ error: "Room not found" });
        }

        //For now returning a JSON. But after the frontend is developed, render a fronted page from here.
        res.status(200).json({
            message: "Welcome to the room. This is the room where editor will be happening.",
            roomName: room.roomName,
            roomId: room.roomId
        });

    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});
*/

export default router;  