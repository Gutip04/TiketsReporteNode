import express from "express"
import { conn } from "./src/config/database.js";
import departmentRoutes from "./src/Routes/RoutesDepartment.js"
import specializationRoutes from "./src/Routes/RoutesSpecialization.js"
import rolRoutes from "./src/Routes/RoutesRol.js"
import userRoutes from "./src/Routes/RoutesUser.js"


const app = express()
app.use(express.json())


app.use("/api",departmentRoutes)
app.use("/api",specializationRoutes)
app.use("/api",rolRoutes)
app.use("/api",userRoutes)


const PORT = 3000
const SERVER = "http://localhost:"
const URL = SERVER + PORT

app.listen(PORT, () => {
    console.log("Servidor funcionando de forma correcta. URL: " + URL)
})

 
conn.authenticate()
    .then(() =>{
        return conn.sync()
        
    })
    .catch((error) =>{
        console.log("error a conexion de la base de datos: " + error);
        
    })