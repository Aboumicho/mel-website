import { app } from "./server";
require("dotenv").config();

app.listen(5000, ()=>{
    console.log("Server ready att http://localhost:5000")
})