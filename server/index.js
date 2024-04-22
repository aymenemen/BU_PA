import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { register } from "./controllers/auth";
import { createProduct } from "./controllers/Product";
import { verifyToken } from "./middleware/auth";
import authRoutes from './routes/auth';
import userRoutes from './routes/User';
import productRoutes from './routes/Product';
import ordersRoutes from './routes/Orders';
import supplierRoutes from './routes/Supplier';



//config:
dotenv.config();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
app.use(express.json());
app.use(helmet());
// app.use(helmet({crossOriginEmbedderPolicy:true}));
// app.use(helmet.crossOriginEmbedderPolicy({policy:"cross-origin"}));
app.use(morgan('common'));
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,'public/assets')));

//storage
const storage = multer.diskStorage(
    {
        destination: function (req,file, cb){
            cb(null,'public/assets')
        },
        filename: function (req,file, cb){
            cb(null,file.originalname)
        }
    }
);
const upload = multer({ storage });

//db connection 
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`server port: ${PORT} `));
   
}).catch(
    (error)=> console.log(`${error} did not connect`)
);

// routes with files 
app.post("/auth/register",upload.single('picture'),register)
app.post("/products",verifyToken,upload.single('picture'),createProduct);


//and routes with files
app.use('/auth',authRoutes);
app.use('/users',userRoutes);
app.use('/orders',ordersRoutes);
app.use('/supplier',supplierRoutes);
app.use('/products',productRoutes);