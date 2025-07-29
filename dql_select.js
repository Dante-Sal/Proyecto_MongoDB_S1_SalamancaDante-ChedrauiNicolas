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

//37. mostrar solamente el nombre y correo electrónico de todo el personal de mantenimiento

db.per_mantenimiento.aggregate([
    {
        $project: {
            nombre_completo: {
                $concat: [
                    "$primer_nombre", " ",
                    { $ifNull: ["$segundo_nombre", ""] }, " ",
                    "$primer_apellido", " ",
                    "$segundo_apellido"
                ]
            },
            correo_electronico: "$correo_el"
        }
    }
]);

//38. buscar áreas especializadas cuyo nombre sea de exactamente una palabra

db.areas_especializadas.find({ nombre: /^[^\s]+$/ });

//39. buscar personal de mantenimiento con salario mayor a 3 millones de pesos

db.per_mantenimiento.find({ salario: { $gt: NumberDecimal("3000000") } });

//40. encontrar fabricantes de medicamentos nacionales y mostrar sólo el nombre y los datos de contacto

db.fabricantes.find({ pais: "Colombia" }, { _id: 0, nombre: 1, tel: 1, correo_el: 1 });

//41. mostrar la colección de pacientes con sus direcciones embebidas y ocultando el campo "id_direccion"

db.pacientes.aggregate([
    {
        $lookup: {
            from: "direcciones_pacientes",
            localField: "id_direccion",
            foreignField: "_id",
            as: "direccion"
        }
    },
    {
        $project: {
            id_hist_clinica: 1,
            primer_nombre: 1,
            segundo_nombre: 1,
            primer_apellido: 1,
            segundo_apellido: 1,
            direccion: 1,
            num_telefono: "$tel",
            correo_electronico: "$correo_el"
        }
    }
]);

//42. mostrar directores generales cuyo correo electrónico termine en "hotmail.com"

db.dir_generales.find({ correo_el: /hotmail.com$/ });

//43. mostrar la colección de médicos con un campo extra llamado dir_general, que muestre el director general que gestiona el hospital donde trabaja cada médico

db.medicos.aggregate([
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
        $lookup: {
            from: "dir_generales",
            localField: "hospital.id_dir_general",
            foreignField: "_id",
            as: "dir_general"
        }
    },
    {
        $unwind: "$dir_general"
    },
    {
        $project: {
            num_colegiatura: 1,
            primer_nombre: 1,
            segundo_nombre: 1,
            primer_apellido: 1,
            segundo_apellido: 1,
            tel: 1,
            correo_el: 1,
            salario: 1,
            id_hospital: 1,
            dir_general: 1
        }
    }
]);

//44. mostrar enfermeros que tengan correos electrónicos con dominios diferentes a "gmail.com"

db.enfermeros.find({ correo_el: { $not: /gmail\.com/ } });

//45. encontrar enfermeros que se encuentren bajo la dirección de "Carlos Gómez Rincón"

db.enfermeros.aggregate([
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
        $lookup: {
            from: "dir_generales",
            localField: "hospital.id_dir_general",
            foreignField: "_id",
            as: "dir_general"
        }
    },
    {
        $unwind: "$dir_general"
    },
    {
        $match: {
            "dir_general.primer_nombre": "Carlos",
            "dir_general.primer_apellido": "Gómez",
            "dir_general.segundo_apellido": "Rincón"
        }
    }
]);

//46. encontrar pacientes que hayan estado en alguna visita médica con el médico "Francisco Javier Montoya Luna"

db.visitas_medicas.aggregate([
    {
        $lookup: {
            from: "medicos",
            localField: "id_medico",
            foreignField: "_id",
            as: "medico"
        }
    },
    {
        $lookup: {
            from: "pacientes",
            localField: "id_paciente",
            foreignField: "_id",
            as: "paciente"
        }
    },
    {
        $unwind: "$medico"
    },
    {
        $unwind: "$paciente"
    },
    {
        $match: {
            "medico.primer_nombre": "Francisco",
            "medico.segundo_nombre": "Javier",
            "medico.primer_apellido": "Montoya",
            "medico.segundo_apellido": "Luna"
        }
    },
    {
        $group: {
            _id: "$paciente._id",
            info_paciente: { $first: "$paciente" },
            visitas: {
                $addToSet: {
                    _id: "$_id",
                    fecha_hora: "$fecha_hora"
                }
            },
            cant_visitas: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            id_paciente: "$info_paciente._id",
            id_hist_clinica: "$info_paciente.id_hist_clinica",
            primer_nombre: "$info_paciente.primer_nombre",
            segundo_nombre: "$info_paciente.segundo_nombre",
            primer_apellido: "$info_paciente.primer_apellido",
            segundo_apellido: "$info_paciente.segundo_apellido",
            id_direccion: "$info_paciente.id_direccion",
            tel: "$info_paciente.tel",
            correo_el: "$info_paciente.correo_el",
            visitas_con_francisco_javier_montoya_luna: "$visitas",
            cant_visitas_con_francisco_javier_montoya_luna: "$cant_visitas"
        }
    }
]);

//47. encontrar pacientes alérgicos a la caspa de animales

db.hist_clinicas_alergias.aggregate([
    {
        $lookup: {
            from: "hist_clinicas",
            localField: "id_hist_clinica",
            foreignField: "_id",
            as: "hist_clinica"
        }
    },
    {
        $lookup: {
            from: "alergias",
            localField: "id_alergia",
            foreignField: "_id",
            as: "alergia"
        }
    },
    {
        $unwind: "$hist_clinica"
    },
    {
        $unwind: "$alergia"
    },
    {
        $lookup: {
            from: "pacientes",
            localField: "hist_clinica._id",
            foreignField: "id_hist_clinica",
            as: "paciente"
        }
    },
    {
        $unwind: "$paciente"
    },
    {
        $match: { "alergia.nombre": "Alergia a la caspa de animales" }
    },
    {
        $group: {
            _id: "$paciente._id",
            paciente: { $first: "$paciente" }
        }
    },
    {
        $project: {
            _id: 0,
            id_hist_clinica: "$paciente.id_hist_clinica",
            primer_nombre: "$paciente.primer_nombre",
            segundo_nombre: "$paciente.segundo_nombre",
            primer_apellido: "$paciente.primer_apellido",
            segundo_apellido: "$paciente.segundo_apellido",
            id_direccion: "$paciente.id_direccion",
            tel: "$paciente.tel",
            correo_el: "$paciente.correo_el"
        }
    }
]);

//48. mostrar todas las terapias (tratamientos con nombre referente a estas mismas)

db.tratamientos.find({ nombre: /terapia/i });

//49. mostrar hospitales cuyo nombre contenga la palabra "San" (insensible a mayúsculas y minúsculas)

db.hospitales.find({ nombre: /\bsan\b/i });

//50. encontrar visitas médicas en las cuales se hayan asignado terapias (tratamientos con nombre referente a estas mismas)

db.visitas_medicas_tratamientos.aggregate([
    {
        $lookup: {
            from: "visitas_medicas",
            localField: "id_visita_medica",
            foreignField: "_id",
            as: "visita_medica"
        }
    },
    {
        $lookup: {
            from: "tratamientos",
            localField: "id_tratamiento",
            foreignField: "_id",
            as: "tratamiento"
        }
    },
    {
        $unwind: "$visita_medica"
    },
    {
        $unwind: "$tratamiento"
    },
    {
        $match: { "tratamiento.nombre": /terapia/i }
    },
    {
        $group: {
            _id: "$id_visita_medica",
            fecha_hora: { $first: "$visita_medica.fecha_hora" },
            id_medico: { $first: "$visita_medica.id_medico" },
            id_paciente: { $first: "$visita_medica.id_paciente" },
            tratamientos_asignados: { $addToSet: "$tratamiento.nombre" },
            evolucion_paciente: { $first: "$visita_medica.evolucion" }
        }
    },
    {
        $project: {
            _id: 0,
            id_visita_medica: "$_id",
            fecha_hora: 1,
            id_medico: 1,
            id_paciente: 1,
            tratamientos_asignados: 1,
            evolucion_paciente: 1
        }
    }
]);

//51. encontrar medicamentos de tipo "Analgésico" cuyo nombre empiece por la letra "A"

db.medicamentos.find({ tipo: "Analgésico", nombre: /^A/i });

//52. encontrar el medicamento con el "_id: 21" y mostrar solamente su nombre

db.medicamentos.find({ _id: 21 }, { _id: 0, nombre: 1 });

//53. listar todos los hospitales con solamente su nombre, número de teléfono, nombre del barrio y municipio donde está ubicado

db.hospitales.aggregate([
    {
        $lookup: {
            from: "barrios",
            localField: "id_barrio",
            foreignField: "_id",
            as: "barrio_info"
        }
    },
    {
        $unwind: "$barrio_info"
    },
    {
        $project: {
            _id: 0,
            hospital: "$nombre",
            telefono: "$tel",
            barrio: "$barrio_info.nombre",
            municipio: "$barrio_info.municipio"
        }
    }
]);

//54. mostrar cada hospital sólo con su nombre, nombre del director general a cargo y correo electrónico del mismo

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
        $project: {
            _id: 0,
            hospital: "$nombre",
            dir_general: {
                $concat: [
                    "$dir_general.primer_nombre", " ",
                    { $ifNull: ["$dir_general.segundo_nombre", ""] }, " ",
                    "$dir_general.primer_apellido", " ",
                    "$dir_general.segundo_apellido"
                ]
            },
            correo_el_dir_general: "$dir_general.correo_el"
        }
    }
]);

//55. encontrar tratamientos que cuesten entre $5'000.000 y $6'000.000

db.tratamientos.find({ costo: { $gte: 5000000 }, costo: { $lte: 6000000 } });

//56. encontrar visitas médicas realizadas en el año 2023 o en el mes de junio

db.visitas_medicas.aggregate([{ $match: { $expr: { $or: [{ $eq: [{ $year: "$fecha_hora" }, 2023] }, { $eq: [{ $month: "$fecha_hora" }, 6] }] } } }]);

//57. encontrar visitas médicas realizadas el 12 de marzo de 2023

db.visitas_medicas.aggregate([{ $match: { $expr: { $and: [{ $eq: [{ $dayOfMonth: "$fecha_hora" }, 12] }, { $eq: [{ $month: "$fecha_hora" }, 3] }, { $eq: [{ $year: "$fecha_hora" }, 2023] }] } } }]);

//58. listar cada hospital con solamente su nombre y el número total de áreas especializadas

db.hospitales.aggregate([
    {
        $lookup: {
            from: "hospitales_areas_especializadas",
            localField: "_id",
            foreignField: "id_hospital",
            as: "areas"
        }
    },
    {
        $project: {
            _id: 0,
            hospital: "$nombre",
            total_areas: { $size: "$areas" }
        }
    }
]);

//59. mostrar los nombres de todos los hospitales junto con todas sus áreas especializadas (sin mostrar el id del hospital)

db.hospitales.aggregate([
    {
        $lookup: {
            from: "hospitales_areas_especializadas",
            localField: "_id",
            foreignField: "id_hospital",
            as: "rel_areas"
        }
    },
    { $unwind: "$rel_areas" },
    {
        $lookup: {
            from: "areas_especializadas",
            localField: "rel_areas.id_area_especializada",
            foreignField: "_id",
            as: "area"
        }
    },
    {
        $unwind: "$area"
    },
    {
        $group: {
            _id: "$_id",
            nombre: { $first: "$nombre" },
            areas_especializadas: { $addToSet: "$area.nombre" }
        }
    },
    {
        $project: {
            _id: 0,
            nombre: 1,
            areas_especializadas: 1
        }
    }
]);

//60. encontrar todos los tratamientos especializados combinados

db.tratamientos.find({ nombre: /tratamiento especializado combinado/i });

//61. buscar diagnósticos relacionados a problemas respiratorios, es decir, que contengan alguna de las siguientes palabras/frases clave:

// - respiratoria
// - fiebre
// - dificultad para respirar
// - bronquitis
// - tos
// - esputo
// - asma
// - sibilancias
// - dificultad respiratoria
// - disnea
// - auscultación
// - faringitis

db.diagnosticos.find({ descripcion: /(respiratoria)|(fiebre)|(dificultad para respirtar)|(bronquitis)|(tos)|(esputo)|(asma)|(sibilancias)|(dificultad respiratoria)|(disnea)|(auscultación)|(faringitis)/ });

//62. mostrar medicamentos con más de 100 y menos de 200 unidades disponibles

db.medicamentos.find({ cant_disp: { $gt: 100, $lt: 200 } });

//63. mostrar antecedentes personales asociados a cirugías

db.ant_personales.find({ descripcion: /cirug[ií]a/i });

//64. buscar todos los casos especiales en la colección de antecedentes personales

db.ant_personales.find({ descripcion: /caso especial/i });

//65. contar cuántos empleados de mantenimiento tiene cada hospital y mostrar dicha cantidad junto con el nombre del establecimiento

db.per_mantenimiento.aggregate([
    {
        $group: {
            _id: "$id_hospital",
            total_personal: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "hospitales",
            localField: "_id", foreignField: "_id",
            as: "hospital"
        }
    },
    {
        $unwind: "$hospital"
    },
    {
        $project: {
            _id: 0,
            nombre: "$hospital.nombre",
            total_per_mantenimiento: "$total_personal"
        }
    }
]);

//66. mostrar los nombres de todos los hospitales y el salario promedio del personal de mantenimiento de cada uno

db.per_mantenimiento.aggregate([
    {
        $group: {
            _id: "$id_hospital",
            salario_promedio: { $avg: "$salario" }
        }
    },
    {
        $lookup: {
            from: "hospitales",
            localField: "_id",
            foreignField: "_id",
            as: "hospital"
        }
    },
    {
        $unwind: "$hospital"
    },
    {
        $project: {
            _id: 0,
            nombre: "$hospital.nombre",
            salario_promedio_per_mantenimiento: {
                $concat: [
                    { $literal: "$" },
                    { $toString: { $round: ["$salario_promedio", 2] } }
                ]
            }
        }
    }
]);

//67. listar los tipos de trabajo en mantenimiento de las instalaciones y cuántos empleados están asociados a cada uno

db.per_mantenimiento.aggregate([
    {
        $group: {
            _id: "$tipo_trabajo",
            total_personas: { $sum: 1 }
        }
    },
    {
        $sort: { total_personas: 1 }
    },
    {
        $project: {
            _id: 0,
            tipo_trabajo: "$_id",
            total_empleados: "$total_personas"
        }
    }
]);

//68. mostrar todos los barrios con algún hospital asociado (nombre del barrio y municipio), con el total de hospitales que se encuentran ubicados en cada uno

db.hospitales.aggregate([
    {
        $group: {
            _id: "$id_barrio",
            total_hosp: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "barrios",
            localField: "_id",
            foreignField: "_id",
            as: "barrio"
        }
    },
    {
        $unwind: "$barrio"
    },
    {
        $project: {
            _id: 0,
            nombre: "$barrio.nombre",
            municipio: "$barrio.municipio",
            total_hospitales: "$total_hosp"
        }
    }
]);

//69. obtener el total de salarios del personal de mantenimiento por hospital y mostrarlo junto a, únicamente, el nombre de cada hospital

db.per_mantenimiento.aggregate([
    {
        $group: {
            _id: "$id_hospital",
            total_salarios: { $sum: "$salario" }
        }
    },
    {
        $lookup: {
            from: "hospitales",
            localField: "_id",
            foreignField: "_id",
            as: "hospital"
        }
    },
    {
        $unwind: "$hospital"
    },
    {
        $project: {
            _id: 0,
            nombre: "$hospital.nombre",
            total_salarios_per_mantenimiento: {
                $concat: [
                    { $literal: "$" },
                    { $toString: "$total_salarios" }
                ]
            }
        }
    }
]);

//70. mostrar los nombres de todos los hospitales junto con los nombres completos del personal de mantenimiento

db.hospitales.aggregate([
    {
        $lookup: {
            from: "per_mantenimiento",
            localField: "_id",
            foreignField: "id_hospital",
            as: "personal_mantenimiento"
        }
    },
    {
        $project: {
            _id: 0,
            nombre: 1,
            personal_mantenimiento: {
                $map: {
                    input: "$personal_mantenimiento",
                    as: "pm",
                    in: { $concat: [
                        "$$pm.primer_nombre", " ", 
                        { $ifNull: ["$$pm.segundo_nombre", ""] }, " ", 
                        "$$pm.primer_apellido", " ", "$$pm.segundo_apellido", " "
                    ] }
                }
            }
        }
    }
]);

//71. mostrar barrios cuyo nombre contenga la letra "z" (mayúscula o minúscula)

db.barrios.find({ nombre: /z/i });

//72. mostrar barrios que pertenezcan a los municipios "Bucaramanga" o "Girón"

db.barrios.find({ $or: [{ municipio: "Bucaramanga" }, { municipio: "Girón" }] });

//73. mostrar áreas especializadas que no contengan la palabra "Medicina"

db.areas_especializadas.find({ nombre: { $not: /Medicina/ } });

//74. buscar directores generales cuyo teléfono empiece con el número "3" (móviles)

db.dir_generales.find({ tel: /^3/ });

//75. mostrar directores generales cuyo correo electrónico sea de dominio "gmail.com"

db.dir_generales.find({ correo_el: /gmail\.com$/ });

//76. mostrar todo el personal de mantenimiento ordenado por salario (de mayor a menor)

db.per_mantenimiento.find().sort({ salario: -1 });

//77. mostrar direcciones de pacientes que usen "Carrera" como vía principal

db.direcciones_pacientes.find({ via_principal_tipo: "Carrera" });

//78. listar direcciones de pacientes con número de vía principal menor o igual a "20"

db.direcciones_pacientes.aggregate([
    {
        $match: {
            $expr: {
                $lte: [
                    { $toInt: "$via_principal_numero" },
                    20
                ]
            }
        }
    }
]);

//79. buscar direcciones de pacientes que tengan una letra de vía generadora definida

db.direcciones_pacientes.find({ via_generadora_letra: { $ne: null } });

//80. mostrar sólo tipo de vía principal y número de vía principal de todas las direcciones de pacientes

db.direcciones_pacientes.find({}, { _id: 0, via_principal_tipo: 1, via_principal_numero: 1 });

//81. listar todo el personal de mantenimiento cuyo primer nombre contenga la letra "o"

db.per_mantenimiento.find({ primer_nombre: /o/i });

//82. mostrar todo el personal de mantenimiento con salario entre 1.5 y 2.5 millones de pesos

db.per_mantenimiento.find({ salario: { $gte: NumberDecimal("1500000"), $lte: NumberDecimal("2500000") } });

//83. listar todo el personal de mantenimiento ordenado alfabéticamente por primer apellido

db.per_mantenimiento.find().sort({ primer_apellido: 1 });

//84. listar solamente los nombres y nacionalidades de todos los fabricantes

db.fabricantes.find({}, { _id: 0, nombre: 1, pais: 1 });

//85. mostrar fabricantes ubicados en "Suiza"

db.fabricantes.find({ pais: "Suiza" });

//86. buscar laboratorios en la colección de fabricantes de medicamentos

db.fabricantes.find({ nombre: /laboratorios?/i });

//87. mostrar todos los resultados médicos sin atributo "_id"

db.resultados.find({}, { _id: 0, descripcion: 1 });

//88. listar áreas especializadas con nombres que contengan "Pedi"

db.areas_especializadas.find({ nombre: /Pedi/ });

//89. buscar directores generales cuyo primer nombre sea exactamente "Carlos"

db.dir_generales.find({ primer_nombre: "Carlos" });

//90. listar directores generales ordenados por primer apellido (de la Z a A)

db.dir_generales.find().sort({ primer_apellido: -1 });

//91. listar todo el personal de mantenimiento cuyo nombre (no apellidos) termine con "a"

db.per_mantenimiento.aggregate([
    {
        $project: {
            nombres: {
                $concat: [
                    "$primer_nombre", " ",
                    { $ifNull: ["$segundo_nombre", ""] }
                ]
            },
            primer_apellido: "$primer_apellido",
            segundo_apellido: "$segundo_apellido",
            tel: "$tel",
            correo_el: "$correo_el",
            tipo_trabajo: "$tipo_trabajo",
            salario: "$salario",
            id_hospital: "$id_hospital"
        }
    },
    {
        $match: { nombres: /a$/ }
    }
]);

//92. buscar medicamentos cuyo nombre empiece con "Amox"

db.medicamentos.find({ nombre: /^Amox/ });

//93. buscar medicamentos que contengan la letra "a"

db.medicamentos.find({ nombre: /a/i });

//94. mostrar sólo el _id y el costo de todos los tratamientos

db.tratamientos.find({}, { costo_tratamiento: { $concat: [{ $literal: "$" }, { $toString: "$costo" }] } });

//95. mostrar sólo el nombre de todos los tratamientos

db.tratamientos.find({}, { _id: 0, nombre: 1 });

//96. buscar tratamientos que contengan la letra "o" en su nombre

db.tratamientos.find({ nombre: /o/i });

//97. buscar tratamientos que contengan la palabra "clínico" o "clínica" en su descripción

db.tratamientos.find({ descripcion: /(cl[ií]nico)|(cl[ií]nica)/i });

//98. buscar tratamientos cuyo nombre termine en "ia"

db.tratamientos.find({ nombre: /ia$/ });

//99. encontrar médicos con nombre "Juan Sebastián" y cualquier apellido

db.medicos.find({ primer_nombre: "Juan", segundo_nombre: "Sebastián" });

//100. encontrar personal de mantenimiento con apellido "Fernández Rodríguez" y cualquier apellido

db.medicos.find({ primer_apellido: "Fernández", segundo_apellido: "Rodríguez" });