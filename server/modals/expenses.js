import mongoose from "mongoose"

const ExpenseSchema = new mongoose.Schema(
    {
        ExpenseId:{
            type: String,
            required:true,
            unique:true,
            

        },
        Type:{
            type: String,
            required:true,
            
            
        },
        Sum:{
            type: Number,
            
            
            
        },
        
    },{timestamps:true}
);

const Expense = mongoose.model('Expense',ExpenseSchema);
export default Expense;