const express=require("express");
const mongoose=require("mongoose");


const app=express();

const cors=require("cors");
const dotenv=require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

let corsOptions = {
    origin:["http://localhost:4000"],
};
PORT = 4000;

db_Url = "mongodb://localhost:27017/forgotpassword-bc";

mongoose
.connect(db_Url)
.then(console.log("db connected"))
.catch((err) => {
    console.log("db not connected");
});

app.listen(PORT,() => {
    console.log("server start on port 4000");
});

const paswordreset=require("./user/routes/resetpw");
const userroute=require("./user/routes/userRouter")



app.use('/',cors(corsOptions),paswordreset);
app.use('/',cors(corsOptions),userroute);


