import { Department } from "../models/ModelDepartment.js"
// Create Department
export function createDepartment(data) {
    return Department.create(data)
}


// Get all Departments
export function getDepartment(data) {
    return Department.findAll(data)
}


// Update Department
export function updateDepartment(data, id) {
    return Department.update(data, {
        where: { id_department: id }
    })
}

// Delete Department
export function deleteDepartment(id) {
    return Department.destroy({
        where: { id_department: id }
    })
}


// Get Department for name
export function getDepartmentName(name) {
    return Department.findOne({
        where: { name: name }
    })
}