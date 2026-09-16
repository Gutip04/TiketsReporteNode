import { TeamUser } from "../models/ModelTeamUser.js";

import { WorkTeam } from "../models/ModelWorkTeam.js";

// Obtener todos los registros

export function getTeamUser(data = {}) {

    return TeamUser.findAll({

        ...data,

        include: {

            model: WorkTeam,

            attributes: ["name"]

        }

    });

}

// Obtener todos los usuarios de un equipo

export function getTeamUsers(id_team) {

    return TeamUser.findAll({

        where: {

            id_WorkTeam: id_team,

        },

        include: {

            model: WorkTeam,

            attributes: ["name"]

        }

    });

}

// Obtener todos los equipos de un usuario

export function getUserTeams(id_user) {

    return TeamUser.findAll({

        where: {

            id_user: id_user,

        },

        include: {

            model: WorkTeam,

            attributes: ["name"]

        }

    });

}

// Agregar un usuario a un equipo

export function addUserToTeam(data) {

    return TeamUser.create(data);

}

// Eliminar un usuario de un equipo

export function removeUserFromTeam(id_team, id_user) {

    return TeamUser.destroy({

        where: {

            id_WorkTeam: id_team,

            id_user: id_user,

        },

    });

}

// Verificar si un usuario ya pertenece a un equipo

export function checkUserTeamExistence(id_team, id_user) {

    return TeamUser.findOne({

        where: {

            id_WorkTeam: id_team,

            id_user: id_user,

        },

        include: {

            model: WorkTeam,

            attributes: ["name"]

        }

    });

}