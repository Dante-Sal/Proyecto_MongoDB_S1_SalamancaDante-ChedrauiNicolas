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

//esquema colección dir_generales

db.createCollection("dir_generales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["primer_nombre", "primer_apellido", "segundo_apellido", "tel", "correo_el", "num_lic_gestion", "salario"],
            properties: {
                primer_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                primer_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                tel: {
                    bsonType: "string",
                    pattern: "^3[0-9]{9}$"
                },
                correo_el: {
                    bsonType: "string",
                    pattern: "^(?!.*\\.\\.)([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9._+-]*[a-zA-Z0-9])@([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9])\.[a-zA-Z]{2,}$"
                },
                num_lic_gestion: {
                    bsonType: "string",
                    pattern: "^[A-Z]{3}-[0-9]{5,7}$"
                },
                salario: {
                    bsonType: "decimal",
                    minimum: 10000000
                }
            }
        }
    }
});

//índices colección dir_generales

db.dir_generales.createIndex({ tel: 1 }, { unique: true });
db.dir_generales.createIndex({ correo_el: 1 }, { unique: true });
db.dir_generales.createIndex({ num_lic_gestion: 1 }, { unique: true });

//esquema colección per_mantenimiento

db.createCollection("per_mantenimiento", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["primer_nombre", "primer_apellido", "segundo_apellido", "tel", "correo_el", "tipo_trabajo", "salario", "id_hospital"],
            properties: {
                primer_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                primer_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                tel: {
                    bsonType: "string",
                    pattern: "^3[0-9]{9}$"
                },
                correo_el: {
                    bsonType: "string",
                    pattern: "^(?!.*\\.\\.)([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9._+-]*[a-zA-Z0-9])@([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9])\.[a-zA-Z]{2,}$"
                },
                tipo_trabajo: {
                    bsonType: "string",
                    enum: [
                        "Electricidad",
                        "Plomería",
                        "Carpintería",
                        "Pintura",
                        "Jardinería",
                        "Limpieza",
                        "Refrigeración",
                        "Mecánica hospitalaria",
                        "Redes y cableado",
                        "Sistemas contra incendios",
                        "Ascensores y escaleras eléctricas",
                        "Desinfección y bioseguridad",
                        "Otros"
                    ]
                },
                salario: {
                    bsonType: "decimal",
                    minimum: 1400000
                },
                id_hospital: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección per_mantenimiento

db.per_mantenimiento.createIndex({ tel: 1 }, { unique: true });
db.per_mantenimiento.createIndex({ correo_el: 1 }, { unique: true });

//esquema colección pacientes

db.createCollection("pacientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_hist_clinica", "primer_nombre", "primer_apellido", "segundo_apellido", "id_direccion", "tel", "correo_el"],
            properties: {
                id_hist_clinica: {
                    bsonType: "int"
                },
                primer_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                primer_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                segundo_apellido: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]{2,30}$"
                },
                id_direccion: {
                    bsonType: "int"
                },
                tel: {
                    bsonType: "string",
                    pattern: "^3[0-9]{9}$"
                },
                correo_el: {
                    bsonType: "string",
                    pattern: "^(?!.*\\.\\.)([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9._+-]*[a-zA-Z0-9])@([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9])\.[a-zA-Z]{2,}$"
                }
            }
        }
    }
});

//índices colección pacientes

db.pacientes.createIndex({ num_hc: 1 }, { unique: true });
db.pacientes.createIndex({ tel: 1 }, { unique: true });
db.pacientes.createIndex({ correo_el: 1 }, { unique: true });