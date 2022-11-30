import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

import HelloController from "./controllers/hello-controller.js"
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";


const CONNECTION_STRING = "mongodb+srv://admin:AdminPassword@cluster0.svqtm.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(CONNECTION_STRING).then(r => console.log("Connected")).catch(err => console.log("Unable to connect", err));

const app = express()
app.use(cors())
app.use(express.json())

HelloController(app)
UsersController(app)
TuitsController(app)

// app.listen(4000)
app.listen(process.env.PORT || 4000)