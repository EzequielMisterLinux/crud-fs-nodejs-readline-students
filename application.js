import readline from "readline";
import {v4 as uuidv4} from "uuid";
import createNewDatabase from "./createDatabase.js";
import createNewStudent from "./createStudent.js";
import updateStudentById from "./updateStudent.js";
import readAllStudents from "./readStudents.js";
import deleteUserById from "./deleteStudent.js";
import CountAllStudents from "./countStudents.js";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const preguntar = () => interfaz.question("porfavor ingrese una opcion\n1-crear base de datos\n2-crear estudiante\n3-actualizar estudiante\n4-ver estudiantes\n5-eliminar estudiantes\n6-contar estudiantes\n7-salir\n", (op) => {

    let opcion = parseInt(op)

    if (opcion === 1) {

        interfaz.question("porfavor ingrese un nombre de estudiante :", (nombre) => {
            interfaz.question("porfavor ingrese un apellido del estudiante :", (apellido) => {
                interfaz.question("porfavor ingrese la edad del estudiante :", (edad) => {
                    interfaz.question("porfavor ingrese la carrera" , (carrera) => {
                        const newDB = {
                            students: [
                                {
                                    id: uuidv4(),
                                    nombre: nombre,
                                    apellido: apellido,
                                    edad: parseInt(edad),
                                    carrera: carrera
                                }
                            ]
                        }
    
                        createNewDatabase(newDB, null, 2)
                        preguntar()
                        console.log("Regresando al menu principal!!!! \n \n");
                    })

                })
            })
        })
        
    }else if (opcion === 2) {
        interfaz.question("porfavor ingrese un nombre de estudiante :", (nombre) => {
            interfaz.question("porfavor ingrese un apellido del estudiante :", (apellido) => {
                interfaz.question("porfavor ingrese la edad del estudiante :", (edad) => {
                    interfaz.question("porfavor ingrese la carrera", (carrera) => {
                        const newUser = {
                            id: uuidv4(),
                            nombre: nombre,
                            apellido: apellido,
                            edad: parseInt(edad),
                            carrera: carrera
                        }
    
                        createNewStudent(newUser)
                        preguntar()
                        console.log("Regresando al menu principal!!!! \n \n");
                    })

                })
            })
        })
        
    }else if (opcion === 3){
        interfaz.question("porfavor ingrese el id del usuario : ", (id) => {
            interfaz.question("porfavor ingrese un nombre de estudiante :", (nombre) => {
                interfaz.question("porfavor ingrese un apellido del estudiante ", (apellido) => {
                    interfaz.question("porfavor ingrese la edad del estudiante ", (edad) => {
                        interfaz.question("porfavor ingrese la carrera :" , (carrera)=> {
                            const updateUser = {
                            
                                nombre: nombre,
                                apellido: apellido,
                                edad: parseInt(edad),
                                carrera: carrera
                            }
        
                            updateStudentById(id, updateUser)
                            preguntar()
                            console.log("Regresando al menu principal!!!! \n \n");
                        })
                    })
                })
            })
        })

    }else if (opcion === 4){

        console.log("todos los estudiantes son: ", readAllStudents());
        preguntar()
        console.log("Regresando al menu principal!!!! \n \n");
        

    }else if (opcion === 5) {
        interfaz.question("porfavor ingrese el id del estudiante que desea borrar : ", (id) =>{

            console.log("usuario eliminado exitosamente: ",deleteUserById(id));
            preguntar()
            console.log("Regresando al menu principal!!!! \n \n");
            

        })
    }else if (opcion === 6){

        CountAllStudents()
        preguntar()
        console.log("Regresando al menu principal!!!! \n \n");

    }else if (opcion === 7) {
        console.log("gracias por usar el administrador de estudiantes");
        interfaz.close();
    }
    else{
        
        preguntar()
        console.log("porfavor ingrese una opcion valida!!!! \n \n");
        
    }

})

preguntar()