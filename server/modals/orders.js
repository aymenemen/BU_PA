import mongoose from "mongoose";

const OrderSchema= new mongoose.Schema(
{
    Product:{
        type: String,
            required:true,
            min : 2,
            max: 50,
    },
    Quantity:{
        type:Number,
    },
    OrderId:{
        type: String,
        required:true,
    },
    ExpectedDate:{
        type: String,
        required:true,
    },
    Status:{
        type: String,
        required:true,
    }
},{timestamps:true}
) 
const Order= mongoose.model('Order',OrderSchema);
export default Order;