const express=require("express");
const mongoose=require("mongoose");
// const router=require("./router/test")
// const routers=require("./router/best")
const router=require("./router/test");
const cors = require("cors")
// mongoose.connect('mongodb://127.0.0.1:27017/test')
// mongoose.connect('mongodb://127.0.0.1:27017/best')

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  const app=express();
  app.use(express.json());
  app.use(cors());
  app.use("/",router);
 
  app.listen(3334,() => console.log("Server Connected"));
