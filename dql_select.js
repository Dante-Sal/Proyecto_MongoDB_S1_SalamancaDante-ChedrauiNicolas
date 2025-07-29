//1. obtener todos los pacientes

db.pacientes.find();

//2. mostrar todos los hospitales

db.hospitales.find();

//3. mostrar todos los barrios

db.barrios.find();

//4. mostrar todas las áreas especializadas

db.areas_especializadas.find();

//5. mostrar todos los directores generales

db.dir_generales.find();

//6. mostrar nombre y teléfono de todos los hospitales

db.hospitales.find({}, { nombre: 1, tel: 1 });

//7. encontrar hospitales que tengan la palabra "Hospital" en su nombre

db.hospitales.find({ nombre: /Hospital/ });

//8. encontrar áreas especializadas que empiecen por la palabra "Medicina"

db.areas_especializadas.find({ nombre: /^Medicina/ });

//9. encontrar personal de mantenimiento encargados de "Desinfección y bioseguridad"

db.per_mantenimiento.find({ tipo_trabajo: "Desinfección y bioseguridad" });

//10. encontrar personal de mantenimiento que trabajen en el "Hospital Internacional de Colombia" y ganen más de $1.800.000

db.per_mantenimiento.aggregate([
    {
        $lookup: {
            from: "hospitales",
            localField: "id_hospital",
            foreignField: "_id",
            as: "hospital"
        }
    },
    {
        $unwind: "$hospital"
    },
    {
        $match: { "hospital.nombre": "Hospital Internacional de Colombia", salario: { $gt: NumberDecimal("1800000") } }
    }
]);

//11. encontrar el director general con el número de licencia de gestión "HOS-2345678"

db.dir_generales.find({ num_lic_gestion: "HOS-2345678" });

//12. encontrar los hospitales que estén bajo la dirección de Diana María Pérez Suárez

db.hospitales.aggregate([
    {
        $lookup: {
            from: "dir_generales",
            localField: "id_dir_general",
            foreignField: "_id",
            as: "dir_general"
        }
    },
    {
        $unwind: "$dir_general"
    },
    {
        $match: {
            "dir_general.primer_nombre": "Diana",
            "dir_general.segundo_nombre": "María",
            "dir_general.primer_apellido": "Pérez",
            "dir_general.segundo_apellido": "Suárez"
        }
    }
]);

//13. encontrar las historias clinicas creadas en 2022 y mostrar solamente el número de historia clínica y la fecha de la última actualización

db.hist_clinicas.aggregate([
    {
        $match: { $expr: { $eq: [{ $year: "$fecha_creacion" }, 2022] } }
    },
    {
        $project: {
            _id: 0,
            num_hc: 1,
            ult_actualizacion: 1
        }
    }
]);

//14. encontrar las historias clínicas creadas en marzo y mostrar solamente el número de historia clínica, la fecha de creación y la fecha de la última actualización

db.hist_clinicas.aggregate([
    {
        $match: { $expr: { $eq: [{ $month: "$fecha_creacion" }, 3] } }
    },
    {
        $project: {
            _id: 0,
            num_hc: 1,
            fecha_creacion: 1,
            ult_actualizacion: 1
        }
    }
]);
