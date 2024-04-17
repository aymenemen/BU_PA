import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        ProductName:{
            type: String,
            required:true,
            min : 2,
            max: 50,
        },
        ProductId:{
            type: Number,
            required:true,
            min : 2,
            max: 50,
        },
        ProductCategory:{
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        ExpiryDate:{
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

        picturePath:{
            type: String,
            default: '',
            
        },
        supplierId:{
            type:Number,
        },
        
        
    },{timestamps:true}
);

const Product = mongoose.model('Product',ProductSchema);
export default Product;