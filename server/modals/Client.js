import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema(
    {
        ClientId:{
            type: String,
            required:true,
            min : 2,
            max: 50,
        },
        Name:{
        type: String,
        required: true,
        
        
        },
        adresse:{
            type: String,
            required: true,
            min: 5,
            
        },
        email:{
            type: String,
            required: true,
            max: 50,
            unique: true,
            
        },
        
    },{timestamps:true}
);

const Client = mongoose.model('Client',ClientSchema);
export default Client;