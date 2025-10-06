//This groups files under a workspace just like vscode left bar

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{ 
        type: String, 
        required: true 
    },

    roomId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Room", 
        required: true 
    },

    rootId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "FileNode" 
    }, // assigned after root folder created

    createdBy:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    }

}, { timestamps: true });

const project = mongoose.model("Project", projectSchema)

export default project;
