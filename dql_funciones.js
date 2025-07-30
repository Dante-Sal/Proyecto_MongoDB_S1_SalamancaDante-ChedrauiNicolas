//1. calcular total de tratamientos asignados por hospital y mostrar tratamientos únicos

//función

function TxsXHosp() {
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

TxsXHosp();

//2. calcular total de visitas médicas por hospital

//función

function VMXHosp() {
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

VMXHosp();

//3. calcular total de registros de cada diagnóstico por hospital

//función

function DxsXHosp() {
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

DxsXHosp();

//4. calcular total de medicamentos disponibles por hospital y mostrar medicamentos únicos

//función

function MedsXHosp() {
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

MedsXHosp();

//5. calcular total de pacientes registrados por diagnóstico

//función

function PctesXDX() {
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

    resultado.forEach(hospital => {
        console.log(`\nTotal de pacientes registrados por "${hospital._id}": ${hospital.cantidad_pacientes}\n`);
        console.log(`------------------------------------------------------------`);
    });
};


//ejecución

PctesXDX();

//6. calcular total de médicos por hospital y mostrar nombres completos del cuerpo médico

//función

function MedicosXHosp() {
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

MedicosXHosp();

//7. calcular total de tratamientos asignados y total de costos de tratamientos por hospital

//función

function CstTxsXHosp() {
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
        { $sort: { costo_total: -1 } }
    ]).toArray();

    resultado.forEach(hospital => {
        console.log(`\nHospital: ${hospital._id}\n`);
        console.log(`Total de tratamientos asignados: ${hospital.total_tratamientos}\n`);
        console.log(`Total de costos de tratamientos: $${hospital.costo_total}\n`);
        console.log(`------------------------------------------------------------`);
    });
};

//ejecución

MedicosXHosp();

