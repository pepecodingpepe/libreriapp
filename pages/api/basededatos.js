import mysql from "mysql2";

export default async function hanler(req, res) {
    const {method,body}=req;
    
    switch (method) {
        case "GET":
            //configurar la conexion a la base de datos
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "admin",
        database: "bibliotecacurso"

    });
        //realizar una consulta a base de datos
        connection.query("SELECT * FROM alumnos", function (err, results, fields){
            if (err){
                console.log(err);
                res.status(500).json({error: err});
            } else {
                console.log(results);
                res.status(200).json({results});
            }
        }
        
        );
         //Cerrar la conexion
         connection.end();
    }

    
}