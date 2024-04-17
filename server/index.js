import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';


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
// still needs routes 
//and routes with files