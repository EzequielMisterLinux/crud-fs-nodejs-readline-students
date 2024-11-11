import fs from "fs";

const myDatabase = "./students.json"

const deleteUserById = (id) => {
    fs.readFile(myDatabase, "utf8", (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener la informacion: ", error);
            return;
        }

        const transformToObject = JSON.parse(data)

        transformToObject.students = transformToObject.students.filter(student => student.id !== id)

        fs.writeFile(myDatabase, JSON.stringify(transformToObject), (error) =>{
            if (error) {
                console.error("hubo un problema al borrar el estudiante: ", error);
                
            }

            console.log("estudiante eliminado exitosamente: " , transformToObject);
            
        })
    })
}

export default deleteUserById