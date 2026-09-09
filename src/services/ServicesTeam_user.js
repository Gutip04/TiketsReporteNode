import {
    getTeamUser,
    getTeamUsers,
    getUserTeams,
    addUserToTeam,
    removeUserFromTeam,
    checkUserTeamExistence,
} from "../repositorys/RepositoryTeam_user.js";

// Obtener todos los registros
export async function serviceGetTeamUsers(data = {}) {
    return await getTeamUser(data);
}

// Obtener todos los usuarios de un equipo
export async function serviceGetUsersByTeam(id_team) {
    return await getTeamUsers(id_team);
}

// Obtener todos los equipos de un usuario
export async function serviceGetTeamsByUser(id_user) {
    return await getUserTeams(id_user);
}

// Agregar usuario a un equipo
export async function serviceAddUserToTeam(data) {
    const { id_team, id_user } = data;

    // Verificar que los datos existan
    if (!id_team || !id_user) {
        throw new Error("id_team e id_user son obligatorios");
    }

    // Verificar si ya existe la relación
    const existing = await checkUserTeamExistence(
        id_team,
        id_user
    );

    if (existing) {
        throw new Error(
            "El usuario ya pertenece a este equipo"
        );
    }

    return await addUserToTeam({
        id_team,
        id_user,
    });
}

// Eliminar usuario de un equipo
export async function serviceRemoveUserFromTeam(
    id_team,
    id_user
) {
    const existing = await checkUserTeamExistence(
        id_team,
        id_user
    );

    if (!existing) {
        throw new Error(
            "El usuario no pertenece a este equipo"
        );
    }

    return await removeUserFromTeam(
        id_team,
        id_user
    );
}

// Verificar si un usuario pertenece a un equipo
export async function serviceCheckUserTeam(
    id_team,
    id_user
) {
    return await checkUserTeamExistence(
        id_team,
        id_user
    );
}
