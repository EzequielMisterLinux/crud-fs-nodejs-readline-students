import fs from "fs";

const db = "./students.json"

const readAllStudents = () => {

    fs.readFile(db, "utf8", (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener los estudiantes :" , error);
            
        }

        const dataStudents = JSON.parse(data)

        const userIteration = dataStudents.students
        console.log("los estudiantes son :");
        userIteration.forEach(element => {

            
            console.log(`El estudiante es : ${element.nombre} , ${element.apellido} y su carrera es : ${element.carrera}`);
            
            
            
        });

        
        
        
    })

}

export default readAllStudents