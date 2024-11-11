import fs from "fs";


const myData = "./students.json"

const updateStudentById = (id, newData) => {

    fs.readFile(myData, "utf8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener a los estudiantes", error);
            return;
        }

        console.log("estudiantes actuales :" , data);

        const myArray = JSON.parse(data)

        const indice = myArray.students.findIndex(student => student.id === id)

        if (indice >= 0) {
            myArray.students[indice]= {
                ...myArray.students[indice],
                ...newData
        }
        }

        fs.writeFile(myData, JSON.stringify(myArray), (error)=> {
            if (error) {
                console.error("hubo un problema al actualizar el studiante");
                return;
            }

            console.log("estudiante actualizado exitosamente : ", myArray);
            
        })
        
    })

}

export default updateStudentById