//esquema colección hospitales

db.createCollection("hospitales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "via_principal_tipo", "via_principal_numero", "via_principal_letra", "via_principal_bis", "via_generadora_numero", "via_generadora_letra", "via_generadora_bis", "placa", "id_barrio", "tel", "id_dir_general"],
            properties: {
                nombre: {
                    bsonType: "string",
                    minLength: 5,
                    maxLength: 100
                },
                via_principal_tipo: {
                    bsonType: "string",
                    enum: [
                        "Calle",
                        "Carrera",
                        "Avenida",
                        "Transversal",
                        "Diagonal",
                        "Circular",
                        "Autopista",
                        "Bulevar",
                        "Carretera",
                        "Troncal"
                    ]
                },
                via_principal_numero: {
                    bsonType: "string",
                    pattern: "^[0-9]{1,3}$"
                },
                via_principal_letra: {
                    bsonType: ["string", "null"],
                    pattern: "^[A-Z]{1,2}$"
                },
                via_principal_bis: {
                    bsonType: "bool"
                },
                via_generadora_numero: {
                    bsonType: "string",
                    pattern: "^[0-9]{1,3}$"
                },
                via_generadora_letra: {
                    bsonType: ["string", "null"],
                    pattern: "^[A-Z]{1,2}$"
                },
                via_generadora_bis: {
                    bsonType: "bool"
                },
                placa: {
                    bsonType: "string",
                    pattern: "^[0-9]{1,3}$"
                },
                id_barrio: {
                    bsonType: "int"
                },
                tel: {
                    bsonType: "string",
                    pattern: "^607[2-9][0-9]{6}$"
                },
                id_dir_general: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección hospitales

db.hospitales.createIndex({ nombre: 1 }, { unique: true });
db.hospitales.createIndex({ via_principal_tipo: 1, via_principal_numero: 1, via_principal_letra: 1, via_principal_bis: 1, via_generadora_numero: 1, via_generadora_letra: 1, via_generadora_bis: 1, placa: 1, id_barrio: 1 }, { unique: true });

//esquema colección hospitales_areas_especializadas

db.createCollection("hospitales_areas_especializadas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_hospital", "id_area_especializada"],
            properties: {
                id_hospital: {
                    bsonType: "int"
                },
                id_area_especializada: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección hospitales_areas_especializadas

db.hospitales_areas_especializadas.createIndex({ id_hospital: 1, id_area_especializada: 1 }, { unique: true });

//esquema colección areas_especializadas

db.createCollection("areas_especializadas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string",
                    enum: [
                        "Medicina Interna",
                        "Pediatría",
                        "Ginecología y Obstetricia",
                        "Cirugía General",
                        "Ortopedia y Traumatología",
                        "Cardiología",
                        "Neurología",
                        "Oncología",
                        "Dermatología",
                        "Psiquiatría",
                        "Oftalmología",
                        "Otorrinolaringología",
                        "Urología",
                        "Gastroenterología",
                        "Nefrología",
                        "Neumología",
                        "Reumatología",
                        "Anestesiología",
                        "Urgencias",
                        "Unidad de Cuidados Intensivos (UCI)",
                        "Medicina Nuclear",
                        "Radiología",
                        "Rehabilitación y Fisioterapia",
                        "Medicina Familiar",
                        "Medicina del Trabajo",
                        "Hemato-oncología",
                        "Infectología",
                        "Otros"
                    ]
                }
            }
        }
    }
});

//índices colección areas_especializadas

db.areas_especializadas.createIndex({ nombre: 1 }, { unique: true });