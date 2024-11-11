import fs from "fs";
import {v4 as uuidv4} from "uuid";

const myDatabase = "./students.json"


const createNewDatabase = (newData) => {

    fs.readFile(myDatabase, "utf8", (error, data) => {

        if (error) {
            console.error("hubo un problema al obtener la informacion de los estudiantes ", error);

            
        }



        fs.writeFile(myDatabase, JSON.stringify(newData), (error) =>{
            if (error) {
                console.error("hubo un problema al crear una nueva base de datos ", error);
                
            }
    
            
    
            console.log("base de datos creada exitosamente");
            
        })

    })



}




export default createNewDatabase