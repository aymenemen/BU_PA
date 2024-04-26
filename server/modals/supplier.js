import mongoose from "mongoose";

const SupplierSchema= new mongoose.Schema(
    {
        SupplierName:{
            type: String,
            required:true,
            min : 2,
            max: 50,
        },
        SupplierId:{
            type: String,
            required:true,
            unique:true,
        },
        Product:{
            type: String,
            required:true,
            min : 2,
            max: 50,
        },
        Phone:{
            type: String,
            required:true,

        },
        email:{
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
    },{timestamps:true}
)
const Supplier= mongoose.model('Supplier',SupplierSchema);
export default Supplier;