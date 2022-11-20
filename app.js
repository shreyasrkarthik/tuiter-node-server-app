import express from 'express'
import HelloController from "./controllers/hello-controller.js"
import UsersController from "./controllers/users/users-controller.js";

const app = express()
HelloController(app)
UsersController(app)

// app.listen(4000)
app.listen(process.env.PORT || 4000)