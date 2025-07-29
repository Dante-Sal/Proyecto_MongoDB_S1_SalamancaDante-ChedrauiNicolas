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

//15. buscar hospitales cuyo nombre empiece con la palabra "Clínica"

db.hospitales.find({ nombre: /^Clínica/ });

//16. mostrar hospitales cuyo nombre contenga "San"

db.hospitales.find({ nombre: /San/ });

//17. mostrar barrios ubicados en "Floridablanca"

db.barrios.find({ municipio: "Floridablanca" });

//18. mostrar barrios ubicados en "Girón"

db.barrios.find({ municipio: "Girón" });

//19. mostrar sólo el nombre de todos los barrios del municipio "Bucaramanga"

db.barrios.find({ municipio: "Bucaramanga" }, { _id: 0, nombre: 1 });

//20. buscar barrios que contengan la palabra "Al" en su nombre (insensible a mayúsculas y minúsculas)

db.barrios.find({ nombre: /Al/i });

//21. mostrar áreas especializadas que empiecen con la letra "C"

db.areas_especializadas.find({ nombre: /^C/i });

//22. mostrar áreas especializadas que incluyan exactamente la palabra "UCI" en su nombre

db.areas_especializadas.find({ nombre: /UCI/ });

//23. mostrar solamente los nombres de todas las áreas especializadas

db.areas_especializadas.find({}, { _id: 0, nombre: 1 });

//24. buscar directores generales con un salario superior a 12 millones de pesos

db.dir_generales.find({ salario: { $gt: NumberDecimal("12000000") } });

//25. mostrar sólo los nombres (no apellidos) y número de teléfono de cada director general

db.dir_generales.find({}, { _id: 0, primer_nombre: 1, segundo_nombre: 1, tel: 1 });

//26. buscar director/es general/es con el apellido "Martínez"

db.dir_generales.find({ $or: [{ primer_apellido: "Martínez" }, { segundo_apellido: "Martínez" }] });

//27. buscar director general con "_id: 1"

db.dir_generales.find({ _id: 1 });

//28. mostrar hospitales cuyo número de teléfono empiece por los dígitos "6076"

db.hospitales.find({ tel: /6076/ });

//29. mostrar hospitales ubicados sobre una avenida

db.hospitales.find({ via_principal_tipo: "Avenida" });

//30. buscar barrios cuyo nombre termine en la letra "o"

db.barrios.find({ nombre: /o$/i });

//31. mostrar barrios con nombres compuestos de una sola palabra

db.barrios.find({ nombre: /^[a-záéíóúñ]+$/i });

//32. mostrar áreas especializadas que terminen en "logía"

db.areas_especializadas.find({ nombre: /logía$/ });

//33. mostrar directores generales cuyo primer nombre sea "Diana"

db.dir_generales.find({ primer_nombre: "Diana" });

//34. mostrar enfermeros con un número de teléfono que contenga dos dígitos iguales consecutivos

db.enfermeros.find({ tel: /([0-9])\1/ });

//35. mostrar todo el personal de mantenimiento que reciba un salario inferior a $2'000.000

db.per_mantenimiento.find({ salario: { $lt: NumberDecimal("2000000") } });

//36. buscar personal de mantenimiento que posea dos nombres

db.per_mantenimiento.find({ segundo_nombre: { $exists: true } });
