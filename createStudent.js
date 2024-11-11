import fs from "fs";

const myDatabase = "./students.json"

const createNewStudent = (newdata) => {

    fs.readFile(myDatabase, "utf8", (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener la base de datos", error);
             return;
        }

        
        const informacion = JSON.parse(data)

        informacion.students.push(newdata)
        

        fs.writeFile(myDatabase, JSON.stringify(informacion), (error) => {
            if (error) {
                console.error("hubo un problema al crear un nuevo estudiante");
                
            }

            console.log("estudiante creado exitosamente: ", informacion);
             
        })

    })

} 


export default createNewStudent