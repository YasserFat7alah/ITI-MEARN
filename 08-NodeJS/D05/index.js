import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js ';
import todosRouter from './routes/todosRoutes.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import { upload } from './utils/upload.js';

dotenv.config(); // .env configuration



const app = express();

/* --- --- --- --- MIDDLEWARES --- --- --- --- */
app.use(express.json());            // bodyParser
app.use(express.static('./static')) // Static files handler
app.use(cors());                    // cross origin resource sharing

// ---- SERVICES
app.use('/todos', todosRouter);     // todos router
app.use('/users', userRouter);      // user router
app.post('/upload', upload.single('image'), function (req, res, next) {
    console.log(req.file);
    console.log(req.body);

    // let user={img:req.file.path,...req.body}
    // usersModel.create(user)

    res.status(200).json({ message: "saved successfully" })

})

// ---- FALL BACKS
app.use(notFound);                  // not found route
app.use(errorHandler);              // error handler               
/* --- --- --- --- ----------- --- --- --- --- */


/* --- --- --- --- DB-CONNECTION --- --- --- --- */
mongoose.connect('mongodb://127.0.0.1:27017/TodosAppITI')
        .then(() => console.log('DataBase Connected!'))
        .catch(err => {
            console.log(err);
        });
/* --- --- --- --- ------------- --- --- --- --- */


/* --- --- --- --- SERVER-SETUP --- --- --- --- */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server Started Successfully at Port ${PORT}`);
});
/* --- --- --- --- ------------ --- --- --- --- */