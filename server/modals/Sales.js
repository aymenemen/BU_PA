import mongoose from "mongoose"

const SalesSchema = new mongoose.Schema(
    {
        SaleId:{
            type: String,
            required:true,
            min : 2,
            max: 50,
        },
        clientId:{
            type: Number,
            required:true,
            min : 2,
            max: 50,
        },
        ProductId:{
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        Date:{
            type: String,
            required: true,
            min: 5,
            
        },
        price:{
            type:Number,
            
        },
        quantity:{
            type:Number,

        },

        
    },{timestamps:true}
);

const Sales = mongoose.model('Sales',SalesSchema);
export default Sales;