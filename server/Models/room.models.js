import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true
    },

    roomName: {
        type: String,
        required: true
    },

    password: {
        type: String, 
        required: true
    },

    code: {
        type: String,
        default: '' //stores the code written in that room.
    }
    
}, {timestamps: true});

const Room = mongoose.model("Room", RoomSchema);
export default Room;