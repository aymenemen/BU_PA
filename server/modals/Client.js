import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema(
    {
        ClientId:{
            type: String,
            required:true,
            unique:true,
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
            
            
        },
        
    },{timestamps:true}
);

const Client = mongoose.model('clients',ClientSchema);
export default Client;