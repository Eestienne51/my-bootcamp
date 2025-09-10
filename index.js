// Collections of packages but we need to install express
import express from "express";
// Cors is for security
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// Keeps those environment variables
dotenv.config()

const app = express()
// Runs on local machine
const port = 8080

// Get request
app.get("/", async (req, res) => {
    res.send("Hello Bootcamp :)")
});

// Start the program 
function start(){
    app.listen(port, () => {
        console.log("started server")
    })
}

// Call start function
start()