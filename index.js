import express from "express";
import { conn } from "./src/config/database.js";

import departemntRoutes from "./src/Routes/RoutesDepartment.js";
import specializationRoutes from "./src/Routes/RoutesSpecialization.js";
import rolRoutes from "./src/Routes/RoutesRol.js";
import userRoutes from "./src/Routes/RoutesUser.js";
import StatesTicketRoute from "./src/Routes/RoutesStates_ticket.js";
import TeamUserroute from "./src/Routes/RoutesTeam_user.js";

const app = express();


app.use(express.json());


// RUTAS
// ==============================

// Relaciones usuario - equipo
app.use("/api/team_user", TeamUserroute);

// Otras rutas
app.use("/api", departemntRoutes);
app.use("/api", specializationRoutes);
app.use("/api", StatesTicketRoute);
app.use("/api", rolRoutes);
app.use("/api", userRoutes);

const PORT = 3000;
const SERVER = "http://localhost:";
const URL = SERVER + PORT;

app.listen(PORT, () => {
    console.log(
        "Servidor funcionando de forma correcta. URL: " + URL
    );
});


conn.authenticate()
    .then(() => {
        return conn.sync();
    })
    .catch((error) => {
        console.log(
            "Error en la conexión de la base de datos: ",
            error
        );
    });
