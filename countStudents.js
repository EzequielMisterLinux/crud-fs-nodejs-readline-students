import fs from "fs";

const MyDB = "./students.json"


const CountAllStudents =() => {

    fs.readFile(MyDB, "utf-8" , (error, data) =>{

        if (error) {
            console.error("hubo un problema al obtener los estudiantes ", error);
            return;
        }

        let students = JSON.parse(data)

        let total = students.students

        console.log("el total de estudiantes son :" , total.length);
        

    })
    


}

export default CountAllStudents