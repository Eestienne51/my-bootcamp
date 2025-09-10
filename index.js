// Collections of packages but we need to install express
import express from "express";
// Cors is for security
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// Keeps those environment variables
dotenv.config()

import { db } from "./utils/FirebaseInit.js"
import { collection, getDocs, addDoc } from "firebase/firestore"

const app = express()
// Runs on local machine
const port = 8080

app.use(bodyParser.urlencoded({extended: false}))

// Get request
app.get("/", async (req, res) => {
    res.send("Hello Bootcamp :)")
});

app.get("/students", async (req, res) => {
    // TODO get all students from firebase
    // make an array
    console.log("getting all students")
    const docs = []
    // get the collection we want
    const collectionRef = collection(db, "students");
    
    // get the documents from the collection
    const collectionSnap = await getDocs(collectionRef)

    // Loop through the documents and push the data from each document into our array
    collectionSnap.forEach((doc) => {
		docs.push(doc.data())
	})

    // Send our array
    res.send(docs)
});

app.get("/cars", async (req, res) => {
    // TODO get all students from firebase
    // make an array
    console.log("getting all cars")
    const docs = []
    // get the collection we want
    const collectionRef = collection(db, "cars");
    
    // get the documents from the collection
    const collectionSnap = await getDocs(collectionRef)

    // Loop through the documents and push the data from each document into our array
    collectionSnap.forEach((doc) => {
		docs.push(doc.data())
	})

    // Send our array
    res.send(docs)
});


// Start the program 
function start(){
    app.listen(port, () => {
        console.log("started server")
    })
}

// Call start function
start()