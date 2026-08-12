import { conn } from "./src/config/database.js";



conn.authenticate()
    .then(() =>{
        console.log("Conexion exitosa a la base de datos");
        
    })
    .catch((error) =>{
        console.log("error a conexion de la base de datos: " + error);
        
    })