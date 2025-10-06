//This will help me make use of the tree structure of the files and directories inside the project, just like the vscode.

import mongoose from "mongoose";

const fileNodeSchema = new mongoose.Schema({

    projectId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Project", 
        required: true 
    },

    parentId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "FileNode", 
        default: null 
    }, //setting the ref value to null indicates that file/folder is the root file/directory. 
      // To set the ref for subfiles/folder, manually assign its ref its parentId value through code logic.

    type:{ 
        type: String, 
        enum: ["folder", "file"], 
        required: true 
    },

    name:{ 
        type: String, 
        required: true 
    },

    content:{ 
        type: String, 
        default: "" 
    },        // store file text (MVP)

    language:{ 
        type: String, 
        default: "plaintext" 
    },

    order:{ 
        type: Number, 
        default: 0 
    },           // ordering within a folder

    lastSavedAt:{ 
        type: Date 
    },

    lastSavedBy:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }

}, { timestamps: true });

// index to quickly query children. Lookup indexing in MongoDB for more info (Do Revisit later).
fileNodeSchema.index({ projectId: 1, parentId: 1 });

export default mongoose.model("FileNode", fileNodeSchema);
