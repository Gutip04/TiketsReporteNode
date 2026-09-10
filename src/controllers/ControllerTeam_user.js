import {
    serviceGetTeamUsers,
    serviceGetUsersByTeam,
    serviceGetTeamsByUser,
    serviceAddUserToTeam,
    serviceRemoveUserFromTeam,
    serviceCheckUserTeam,
} from "../services/ServicesTeam_user.js";

// GET /team-users
export async function getTeamUsersController(req, res) {
    try {
        const data = await serviceGetTeamUsers();

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// GET /team-users/team/:id_team
export async function getUsersByTeamController(req, res) {
    try {
        const { id_team } = req.params;

        const data = await serviceGetUsersByTeam(
            id_team
        );

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// GET /team-users/user/:id_user
export async function getTeamsByUserController(req, res) {
    try {
        const { id_user } = req.params;

        const data = await serviceGetTeamsByUser(
            id_user
        );

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// POST /team-users
export async function addUserToTeamController(req, res) {
    try {
        const data = req.body;

        const result = await serviceAddUserToTeam(data);

        res.status(201).json({
            success: true,
            message:
                "Usuario agregado al equipo correctamente",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

// DELETE /team-users/team/:id_team/user/:id_user
export async function removeUserFromTeamController(
    req,
    res
) {
    try {
        const { id_team, id_user } = req.params;

        await serviceRemoveUserFromTeam(
            id_team,
            id_user
        );

        res.status(200).json({
            success: true,
            message:
                "Usuario eliminado del equipo correctamente",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

// GET /team-users/team/:id_team/user/:id_user
export async function checkUserTeamController(req, res) {
    try {
        const { id_team, id_user } = req.params;

        const result = await serviceCheckUserTeam(
            id_team,
            id_user
        );

        res.status(200).json({
            success: true,
            exists: !!result,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
