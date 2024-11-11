import fs from "fs";

const db = "./students.json"

const readAllStudents = () => {

    fs.readFile(db, "utf8", (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener los estudiantes :" , error);
            
        }

        const dataStudents = JSON.parse(data)

        console.log("los estudiantes son :" , dataStudents);
        
        
    })

}

export default readAllStudents