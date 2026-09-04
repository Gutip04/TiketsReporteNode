import { conn } from '../config/database.js';
import { Department } from '../models/ModelDepartment.js';
import { Rol } from '../models/ModelRol.js';
import { Specialization } from '../models/ModelSpecialization.js';
import { User } from '../models/ModelUser.js';

async function seedDatabase() {
    try {
        // 1. Conectar a la base de datos
        await conn.authenticate();
        console.log(' Conexión a la base de datos establecida.');

        // 2. Insertar Departamentos (Padre)
        const departments = await Department.bulkCreate([
            { name: 'Sistemas e Informática' },
            { name: 'Recursos Humanos' },
            { name: 'Soporte Técnico' }
        ]);
        console.log(' Departments created.');

        // 3. Insertar Roles (Padre)
        const rols = await Rol.bulkCreate([
            { name: 'Administrador' },
            { name: 'Técnico' },
            { name: 'Usuario Final' }
        ]);
        console.log(' Roles created.');

        // 4. Insertar Especializaciones (Padre)
        const specializations = await Specialization.bulkCreate([
            { name: 'Desarrollo Software' },
            { name: 'Redes e Infraestructura' },
            { name: 'Mantenimiento Hardware' }
        ]);
        console.log(' Specializations created.');

        // 5. Insertar Usuarios utilizando las llaves foráneas anteriores
        const users = await User.bulkCreate([
            {
                first_name: 'Andrés ',
                last_name: 'Pascual',
                phone: "1234567890",
                email: 'andres@correo.com',
                password: '12345',
                id_department: departments[0].id_department ,
                id_rol: rols[0].id_rol,
                id_specialization: specializations[0].id_specialization
            },
            {
                first_name: 'Carlos ',
                last_name: 'Perez',
                phone: "1234567890",
                email: 'carlos@correo.com',
                password: '12345',
                id_department: departments[2].id_department,
                id_rol: rols[1].id_rol,
                id_specialization: specializations[2].id_specialization
            }
        ]);
        console.log(` ${users.length} usuarios creados con sus llaves foráneas asignadas.`);

        console.log(' Base de datos poblada con éxito.');
        process.exit(0);

    } catch (error) {
        console.error(' Error al poblar la base de datos:', error);
        process.exit(1);
    }
}

seedDatabase();