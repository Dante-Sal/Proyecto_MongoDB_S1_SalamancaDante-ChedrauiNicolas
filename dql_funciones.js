//1. calcular total de tratamientos asignados por hospital y mostrar tratamientos únicos

//función

function getTratsxHosp() {
    const resultado = db.visitas_medicas_tratamientos.aggregate([
        { $lookup: { from: "visitas_medicas", localField: "id_visita_medica", foreignField: "_id", as: "visita_info" } },
        { $unwind: "$visita_info" },
        { $lookup: { from: "medicos", localField: "visita_info.id_medico", foreignField: "_id", as: "medico_info" } },
        { $unwind: "$medico_info" },
        { $lookup: { from: "hospitales", localField: "medico_info.id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        { $lookup: { from: "tratamientos", localField: "id_tratamiento", foreignField: "_id", as: "tratamiento_info" } },
        { $unwind: "$tratamiento_info" },
        { $group: { _id: "$hospital_info.nombre", total_tratamientos: { $sum: 1 }, tratamientos: { $addToSet: "$tratamiento_info.nombre" } } },
        { $sort: { total_tratamientos: -1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Total de tratamientos asignados: ${hospital.total_tratamientos}\n`);
        console.log(`Tratamientos únicos asignados: ${hospital.tratamientos.join(", ")}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

getTratsxHosp();

//2. calcular total de visitas médicas por hospital

//función

function countVMxHosp() {
    const resultado = db.visitas_medicas.aggregate([
        { $lookup: { from: "medicos", localField: "id_medico", foreignField: "_id", as: "medico_info" } },
        { $unwind: "$medico_info" },
        { $lookup: { from: "hospitales", localField: "medico_info.id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        { $group: { _id: "$hospital_info.nombre", total_visitas: { $sum: 1 } } },
        { $sort: { total_visitas: -1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Total de visitas médicas: ${hospital.total_visitas}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

countVMxHosp();

//3. calcular total de registros de cada diagnóstico por hospital

//función

function countDxRegsxHosp() {
    const resultado = db.visitas_medicas_diagnosticos.aggregate([
        { $lookup: { from: "visitas_medicas", localField: "id_visita_medica", foreignField: "_id", as: "visita_info" } },
        { $unwind: "$visita_info" },
        { $lookup: { from: "medicos", localField: "visita_info.id_medico", foreignField: "_id", as: "medico_info" } },
        { $unwind: "$medico_info" },
        { $lookup: { from: "hospitales", localField: "medico_info.id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        { $lookup: { from: "diagnosticos", localField: "id_diagnostico", foreignField: "_id", as: "diagnostico_info" } },
        { $unwind: "$diagnostico_info" },
        { $group: { _id: { hospital: "$hospital_info.nombre", diagnostico: "$diagnostico_info.descripcion" }, total_diagnosticos: { $sum: 1 } } },
        { $sort: { total_diagnosticos: -1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id.hospital}\n`);
        console.log(`Diagnóstico: ${hospital._id.diagnostico}\n`);
        console.log(`Total registros del diagnóstico: ${hospital.total_diagnosticos}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

countDxRegsxHosp();

//4. calcular total de medicamentos disponibles por hospital y mostrar medicamentos únicos

//función

function getMedsDispxHosp() {
    const resultado = db.inventarios_medicamentos.aggregate([
        { $lookup: { from: "hospitales", localField: "id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        { $lookup: { from: "medicamentos", localField: "id_medicamento", foreignField: "_id", as: "medicamento_info" } },
        { $unwind: "$medicamento_info" },
        { $group: { _id: "$hospital_info.nombre", total_medicamentos: { $sum: "$cant_disp" }, medicamentos: { $addToSet: "$medicamento_info.nombre" } } },
        { $sort: { total_medicamentos: 1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Total de medicamentos disponibles en inventario: ${hospital.total_medicamentos}\n`);
        console.log(`Medicamentos únicos disponibles en inventario: ${hospital.medicamentos.join(", ")}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

getMedsDispxHosp();

//5. calcular total de pacientes registrados por diagnóstico

//función

function countPacsxDiag() {
    const resultado = db.visitas_medicas_diagnosticos.aggregate([
        { $lookup: { from: "visitas_medicas", localField: "id_visita_medica", foreignField: "_id", as: "visita_info" } },
        { $unwind: "$visita_info" },
        { $lookup: { from: "pacientes", localField: "visita_info.id_paciente", foreignField: "_id", as: "paciente_info" } },
        { $unwind: "$paciente_info" },
        { $lookup: { from: "diagnosticos", localField: "id_diagnostico", foreignField: "_id", as: "diagnostico_info" } },
        { $unwind: "$diagnostico_info" },
        { $group: { _id: "$diagnostico_info.descripcion", pacientes: { $addToSet: "$paciente_info._id" } } },
        { $project: { _id: 1, cantidad_pacientes: { $size: "$pacientes" } } },
        { $sort: { cantidad_pacientes: 1 } }
    ]).toArray();

    resultado.forEach(diagnostico => {
        console.log(`\nTotal de pacientes registrados por "${diagnostico._id}": ${diagnostico.cantidad_pacientes}\n`);
        console.log(`------------------------------------------------------------`);
    });
};


//ejecución

countPacsxDiag();

//6. calcular total de médicos por hospital y mostrar nombres completos del cuerpo médico

//función

function getMedicosxHosp() {
    const resultado = db.medicos.aggregate([
        { $lookup: { from: "hospitales", localField: "id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        {
            $group: {
                _id: "$hospital_info.nombre",
                total_medicos: { $sum: 1 },
                medicos: {
                    $addToSet: {
                        $concat: [
                            "$primer_nombre", " ",
                            { $ifNull: ["$segundo_nombre", ""] }, " ",
                            "$primer_apellido", " ",
                            "$segundo_apellido"
                        ]
                    }
                }
            }
        },
        { $sort: { total_medicos: 1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Cuerpo médico: ${hospital.medicos.join(", ")}\n`);
        console.log(`Total de médicos: ${hospital.total_medicos}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

getMedicosxHosp();

//7. calcular total de tratamientos asignados y total de costos de tratamientos por hospital

//función

function calcTTCxHosp() {
    const resultado = db.visitas_medicas_tratamientos.aggregate([
        { $lookup: { from: "visitas_medicas", localField: "id_visita_medica", foreignField: "_id", as: "visita_info" } },
        { $unwind: "$visita_info" },
        { $lookup: { from: "medicos", localField: "visita_info.id_medico", foreignField: "_id", as: "medico_info" } },
        { $unwind: "$medico_info" },
        { $lookup: { from: "hospitales", localField: "medico_info.id_hospital", foreignField: "_id", as: "hospital_info" } },
        { $unwind: "$hospital_info" },
        { $lookup: { from: "tratamientos", localField: "id_tratamiento", foreignField: "_id", as: "tratamiento_info" } },
        { $unwind: "$tratamiento_info" },
        { $group: { _id: "$hospital_info.nombre", total_tratamientos: { $sum: 1 }, costo_total: { $sum: "$tratamiento_info.costo" } } },
        { $sort: { costo_total: 1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Total de tratamientos asignados: ${hospital.total_tratamientos}\n`);
        console.log(`Total de costos de tratamientos: $${hospital.costo_total}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

calcTTCxHosp();

//8. mostrar los n (número indicado por el usuario) tratamientos más costosos

//función

function getTMC(n) {
    const resultado = db.tratamientos.find().sort({ costo: -1 }).limit(n).toArray();

    for (let i = 0; i < resultado.length; i++) {
        const tratamiento = resultado[i];
        console.log(`\nTratamiento más costoso #${i + 1}:\n`);
        console.log(`Nombre: ${tratamiento.nombre}`);
        console.log(`Descripción: ${tratamiento.descripcion}`);
        console.log(`Área médica: ${tratamiento.area_med}`);
        console.log(`------------------------------------------------------------`);
        console.log(`Costo: $${tratamiento.costo}`);
        console.log(`------------------------------------------------------------`);
    };
};

//ejecución (ingresar un número entero positivo [n] como parámetro)

getTMC(n);

//9. mostrar los pacientes que residan más arriba de n (número indicado por el usuario) vía principal

//función

function findPacsViaGT(tipo_via, n) {
    tipo_via = tipo_via.trim().toLowerCase();

    if (tipo_via != "calle" && tipo_via != "carrera" && tipo_via != "avenida" && tipo_via != "transversal" && tipo_via != "diagonal"
        && tipo_via != "circular" && tipo_via != "autopista" && tipo_via != "bulevar" && tipo_via != "carretera" && tipo_via != "troncal") {
        console.log(`Tipo de vía inválido...`);
        return;
    };

    const resultado = db.pacientes.aggregate([
        { $lookup: { from: "direcciones_pacientes", localField: "id_direccion", foreignField: "_id", as: "direccion" } },
        { $unwind: "$direccion" },
        { $lookup: { from: "barrios", localField: "direccion.id_barrio", foreignField: "_id", as: "barrio" } },
        { $unwind: "$barrio" },
        { $match: { $expr: { $and: [{ $eq: [{ $toLower: "$direccion.via_principal_tipo" }, tipo_via] }, { $gt: [{ $toInt: "$direccion.via_principal_numero" }, n] }] } } }
    ]).toArray();

    resultado.forEach(paciente => {
        if (!paciente.segundo_nombre) {
            console.log(`\nPaciente: ${paciente.primer_nombre} ${paciente.primer_apellido} ${paciente.segundo_apellido}\n`);
        } else {
            console.log(`\nPaciente: ${paciente.primer_nombre} ${paciente.segundo_nombre} ${paciente.primer_apellido} ${paciente.segundo_apellido}\n`);
        };

        let dir = `${paciente.direccion.via_principal_tipo} ${paciente.direccion.via_principal_numero}`;

        if (paciente.direccion.via_principal_letra != null) {
            dir += `${paciente.direccion.via_principal_letra}`;
            if (paciente.direccion.via_principal_bis === true) {
                dir += ` Bis `;
            } else {
                dir += ` `;
            };
        } else {
            if (paciente.direccion.via_principal_bis === true) {
                dir += ` Bis `;
            } else {
                dir += ` `;
            };
        };

        dir += `#${paciente.direccion.via_generadora_numero}`;

        if (paciente.direccion.via_generadora_letra != null) {
            dir += `${paciente.direccion.via_generadora_letra}`;
        };

        if (paciente.direccion.via_generadora_bis === true) {
            dir += ` Bis`;
        };

        dir += ` - ${paciente.direccion.placa}, ${paciente.barrio.nombre}`;

        console.log(`Dirección: ${dir}\n`);
        console.log(`Número de teléfono: ${paciente.tel}\n`);
        console.log(`Correo electrónico: ${paciente.correo_el}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un tipo de vía válido [tipo_via] y un número entero positivo [n] como parámetros)

findPacsViaGT(tipo_via, n);

//10. mostrar los pacientes cuyo apellido coincida parcialmente con x cadena de texto (indicada por el usuario)

//función

async function findPacsxApParc(x) {
    const resultado = await db.pacientes.find({ $or: [{ primer_apellido: { $regex: x, $options: "i" } }, { segundo_apellido: { $regex: x, $options: "i" } }] }).toArray();

    resultado.forEach(paciente => {
        if (!paciente.segundo_nombre) {
            console.log(`\nPaciente: ${paciente.primer_nombre} ${paciente.primer_apellido} ${paciente.segundo_apellido}\n`);
        } else {
            console.log(`\nPaciente: ${paciente.primer_nombre} ${paciente.segundo_nombre} ${paciente.primer_apellido} ${paciente.segundo_apellido}\n`);
        };

        console.log(`Número de teléfono: ${paciente.tel}\n`);
        console.log(`Correo electrónico: ${paciente.correo_el}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar una cadena de texto [x] como parámetro)

findPacsxApParc(x);

//11. mostrar los médicos asignados a un hospital específico (id indicado por el usuario)

//función

function findMedicosxHospID(id_hospital) {
    const resultado = db.medicos.find({ id_hospital: id_hospital }).toArray();

    resultado.forEach(medico => {
        if (!medico.segundo_nombre) {
            console.log(`\nMédico: ${medico.primer_nombre} ${medico.primer_apellido} ${medico.segundo_apellido}\n`);
        } else {
            console.log(`\nMédico: ${medico.primer_nombre} ${medico.segundo_nombre} ${medico.primer_apellido} ${medico.segundo_apellido}\n`);
        };

        console.log(`Número de colegiatura: ${medico.num_colegiatura}\n`);
        console.log(`Número de teléfono: ${medico.tel}\n`);
        console.log(`Correo electrónico: ${medico.correo_el}\n`);
        console.log(`Salario: $${medico.salario}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un número entero positivo [id_hospital] como parámetro)

findMedicosxHospID(id_hospital);

//12. filtrar los diagnósticos que contienen una palabra clave x (indicada por el usuario) en su descripción

//función

function findDiagsxDescParc(x) {
    const resultado = db.diagnosticos.find({ descripcion: { $regex: x, $options: "i" } }).toArray();

    resultado.forEach(diagnostico => {
        console.log(`\nDiagnóstico: ${diagnostico.descripcion}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar una cadena de texto [x] como parámetro)

findDiagsxDescParc(x);

//13. buscar medicamentos por su tipo (indicado por el usuario)

//función

function findMedsxTipo(tipo_med) {
    const tipos_validos = [
        "analgésico",
        "antibiótico",
        "antiinflamatorio",
        "antipirético",
        "antihipertensivo",
        "ansiolítico",
        "antidepresivo",
        "antihistamínico",
        "broncodilatador",
        "diurético",
        "corticoide",
        "anticonvulsivo",
        "antimicótico",
        "antiviral",
        "vacuna",
        "relajante muscular",
        "antidiabético",
        "anticoagulante",
        "gastroprotector",
        "suplemento vitamínico",
        "otros"
    ];

    if (!tipos_validos.includes(tipo_med.trim().toLowerCase())) {
        console.log(`Tipo de medicamento inválido...`);
    };

    const resultado = db.medicamentos.find({ tipo: tipo_med }).toArray();

    resultado.forEach(medicamento => {
        console.log(`\nMedicamento: ${medicamento.nombre}\n`);
        console.log(`Tipo: ${medicamento.tipo}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un tipo de medicamento válido [tipo_med])

findMedsxTipo(tipo_med);

//14. buscar visitas médicas por año (indicado por el usuario)

//función

function findVMxY(anio_visita) {
    const resultado = db.visitas_medicas.aggregate([
        { $project: { fecha_hora: 1, anio: { $year: "$fecha_hora" }, id_medico: 1, id_paciente: 1, evolucion: 1 } },
        { $match: { anio: anio_visita } }
    ]).toArray();

    resultado.forEach(visita_medica => {
        console.log(`\nVisita médica #${visita_medica._id}:\n`);
        console.log(`Fecha: ${visita_medica.fecha_hora}`);
        console.log(`ID médico: ${visita_medica.id_medico}`);
        console.log(`ID paciente: ${visita_medica.id_paciente}`);
        console.log(`Evolución del paciente: ${visita_medica.evolucion}`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un número entero positivo [anio_visita] como parámetro)

findVMxY(anio_visita);

//15. buscar historias clínicas por "mes de creación" con determinado "límite de resultados mostrados" (parámetros indicados por el usuario entre comillas)

//función

function findHCxMesLim(mes_creacion, lim) {
    const resultado = db.hist_clinicas.aggregate([
        { $project: { num_hc: 1, fecha_creacion: 1, mes: { $month: "$fecha_creacion" }, ult_actualizacion: 1 } },
        { $match: { mes: mes_creacion } },
        { $limit: lim }
    ]).toArray();

    resultado.forEach(hist_medica => {
        console.log(`\nHistoria clínica #${hist_medica._id}:\n`);
        console.log(`Fecha de creación: ${hist_medica.fecha_creacion}`);
        console.log(`Fecha de la última actualización: ${hist_medica.ult_actualizacion}`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar dos números enteros positivos [mes_creacion, lim] como parámetros)

findHCxMesLim(mes_creacion, lim);

//16. mostrar medicamentos con disponibilidad menor a cierto umbral "u" para un "tipo" específico (parámetros indicados por el usuario entre comillas)

//función

function findMedsDispLTxTipo(u, tipo_med) {
    const tipos_validos = [
        "analgésico",
        "antibiótico",
        "antiinflamatorio",
        "antipirético",
        "antihipertensivo",
        "ansiolítico",
        "antidepresivo",
        "antihistamínico",
        "broncodilatador",
        "diurético",
        "corticoide",
        "anticonvulsivo",
        "antimicótico",
        "antiviral",
        "vacuna",
        "relajante muscular",
        "antidiabético",
        "anticoagulante",
        "gastroprotector",
        "suplemento vitamínico",
        "otros"
    ];

    if (!tipos_validos.includes(tipo_med.trim().toLowerCase())) {
        console.log(`Tipo de medicamento inválido...`);
    };

    const resultado = db.inventarios_medicamentos.aggregate([
        { $lookup: { from: "medicamentos", localField: "id_medicamento", foreignField: "_id", as: "medicamento" } },
        { $unwind: "$medicamento" },
        { $group: { _id: "$medicamento.nombre", tipo: { $first: "$medicamento.tipo" }, total_disp: { $sum: "$cant_disp" } } },
        { $match: { $expr: { $and: [{ $lt: ["$total_disp", u] }, { $eq: [{ $toLower: "$tipo" }, tipo_med] }] } } }
    ]).toArray();

    resultado.forEach(medicamento => {
        console.log(`\nMedicamento: ${medicamento._id}\n`);
        console.log(`Tipo: ${medicamento.tipo}\n`);
        console.log(`Total de unidades disponibles en todo el sistema: ${medicamento.total_disp}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un número entero positivo [u] y un tipo de medicamento válido [tipo_med] como parámetros)

findMedsDispLTxTipo(u, tipo_med);

//17. mostrar los medicamentos cuyo nombre coincida parcialmente con x cadena de texto (indicada por el usuario)

//función

function findMedsxNomParc(x) {
    const resultado = db.medicamentos.find({ nombre: { $regex: x, $options: "i" } }).toArray();

    resultado.forEach(medicamento => {
        console.log(`\nMedicamento: ${medicamento.nombre}\n`);
        console.log(`Tipo: ${medicamento.tipo}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar una cadena de texto [x] como parámetro)

findMedsxNomParc(x);

//18. listar todas las visitas médicas realizadas por un paciente, a través de su ID (indicado por el usuario)

//función

function findVMxPacID(id_paciente) {
    const resultado = db.visitas_medicas.find({ id_paciente: id_paciente }).toArray();

    resultado.forEach(visita_medica => {
        console.log(`\nVisita médica #${visita_medica._id}:\n`);
        console.log(`Fecha: ${visita_medica.fecha_hora}`);
        console.log(`ID médico: ${visita_medica.id_medico}`);
        console.log(`ID paciente: ${visita_medica.id_paciente}`);
        console.log(`Evolución del paciente: ${visita_medica.evolucion}`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un número entero positivo [id_paciente] como parámetro)

findVMxPacID(id_paciente);

//19. mostrar tratamientos pertenecientes a un área médica específica (indicada por el usuario)

//función

function findTratsxArea(area_medica) {
    const areas_validas = [
        "medicina general",
        "pediatría",
        "ginecología",
        "obstetricia",
        "cardiología",
        "dermatología",
        "neurología",
        "ortopedia",
        "oncología",
        "psiquiatría",
        "urología",
        "gastroenterología",
        "endocrinología",
        "otorrinolaringología",
        "oftalmología",
        "nefrología",
        "neumología",
        "reumatología",
        "infectología",
        "medicina interna",
        "traumatología",
        "otros"
    ];

    if (!areas_validas.includes(area_medica.trim().toLowerCase())) {
        console.log(`Área médica inválida...`);
    };

    const resultado = db.tratamientos.aggregate([
        { $match: { $expr: { $eq: [{ $toLower: "$area_med" }, area_medica] } } }
    ]).toArray();

    resultado.forEach(tratamiento => {
        console.log(`\nTratamiento: ${tratamiento.nombre}\n`);
        console.log(`Descripción: ${tratamiento.descripcion}\n`);
        console.log(`Costo: $${tratamiento.costo}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar un área médica válida [area_medica])

findTratsxArea(area_medica);

//20. mostrar los fabricantes cuyo nombre coincida parcialmente con x cadena de texto (indicada por el usuario)

//función

function findFabsxNomParc(x) {
    const resultado = db.fabricantes.find({ nombre: { $regex: x, $options: "i" } }).toArray();

    resultado.forEach(fabricante => {
        console.log(`\nFabricante: ${fabricante.nombre}\n`);
        console.log(`Nacionalidad: ${fabricante.pais}\n`);
        console.log(`Número de teléfono: ${fabricante.tel}\n`);
        console.log(`Correo electrónico: ${fabricante.correo_el}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución (ingresar una cadena de texto [x] como parámetro)

findFabsxNomParc(x);