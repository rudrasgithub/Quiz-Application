import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';


/** import connection file */
import connect from './database/conn.js';

const app = express()


/** app middlewares */
app.use(morgan('tiny'));
app.use(cors({
    origin:["https://quiz-application-d36b.vercel.app"],
    methods:["GET","POST"],
    crendentials:true
    ));
app.use(express.json());
config();


/** appliation port */
const port = 5000;


/** routes */
app.use('/api', router) /** apis */
app.get('/',(req,res)=>{
    res.json("Hello");
});

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log("Server connected to http://localhost:5000")
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})

