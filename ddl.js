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

//esquema colección medicos

db.createCollection("medicos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["num_colegiatura", "primer_nombre", "primer_apellido", "segundo_apellido", "tel", "correo_el", "salario", "id_hospital"],
            properties: {
                num_colegiatura: {
                    bsonType: "string",
                    pattern: "^[0-9]{6}$"
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
                tel: {
                    bsonType: "string",
                    pattern: "^3[0-9]{9}$"
                },
                correo_el: {
                    bsonType: "string",
                    pattern: "^(?!.*\\.\\.)([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9._+-]*[a-zA-Z0-9])@([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9])\.[a-zA-Z]{2,}$"
                },
                salario: {
                    bsonType: "decimal",
                    minimum: 4500000
                },
                id_hospital: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección medicos

db.medicos.createIndex({ num_colegiatura: 1 }, { unique: true });
db.medicos.createIndex({ tel: 1 }, { unique: true });
db.medicos.createIndex({ correo_el: 1 }, { unique: true });

//esquema colección per_admin

db.createCollection("per_admin", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["primer_nombre", "primer_apellido", "segundo_apellido", "tel", "correo_el", "cargo", "area_resp", "salario", "id_hospital"],
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
                cargo: {
                    bsonType: "string",
                    enum: [
                        "Jefe de Finanzas",
                        "Jefe de Recursos Humanos",
                        "Jefe de Compras",
                        "Jefe de Logística",
                        "Asistente Administrativo",
                        "Analista Contable",
                        "Secretario/a General",
                        "Auxiliar de Archivo",
                        "Recepcionista",
                        "Coordinador de Talento Humano",
                        "Gestor de Calidad",
                        "Gestor de Seguridad y Salud en el Trabajo",
                        "Tesorero/a",
                        "Coordinador de Servicios Generales",
                        "Director Jurídico",
                        "Otros"
                    ]
                },
                area_resp: {
                    bsonType: "string",
                    enum: [
                        "Contabilidad",
                        "Finanzas",
                        "Talento Humano",
                        "Compras",
                        "Logística",
                        "Calidad",
                        "Archivo",
                        "Recepción",
                        "Jurídica",
                        "Planeación",
                        "Contratación",
                        "Tesorería",
                        "Sistemas de Información",
                        "Atención al Usuario",
                        "Seguridad y Salud en el Trabajo",
                        "Servicios Generales",
                        "Otros"
                    ]
                },
                salario: {
                    bsonType: "decimal",
                    minimum: 1600000
                },
                id_hospital: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección per_admin

db.per_admin.createIndex({ tel: 1 }, { unique: true });
db.per_admin.createIndex({ correo_el: 1 }, { unique: true });

//esquema colección enfermeros

db.createCollection("enfermeros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["primer_nombre", "primer_apellido", "segundo_apellido", "tel", "correo_el", "salario", "id_hospital"],
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
                salario: {
                    bsonType: "decimal",
                    minimum: 1700000
                },
                id_hospital: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección enfermeros

db.enfermeros.createIndex({ tel: 1 }, { unique: true });
db.enfermeros.createIndex({ correo_el: 1 }, { unique: true });

//esquema colección barrios

db.createCollection("barrios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "municipio"],
            properties: {
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    maxLength: 50
                },
                municipio: {
                    bsonType: "string",
                    minLength: 5,
                    maxLength: 30
                }
            }
        }
    }
});

//índices colección barrios

db.barrios.createIndex({ nombre: 1 }, { unique: true });

//esquema colección direcciones_pacientes

db.createCollection("direcciones_pacientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["via_principal_tipo", "via_principal_numero", "via_principal_letra", "via_principal_bis", "via_generadora_numero", "via_generadora_letra", "via_generadora_bis", "placa", "id_barrio"],
            properties: {
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
                }
            }
        }
    }
});

//índices colección direcciones_pacientes

db.direcciones_pacientes.createIndex({ via_principal_tipo: 1, via_principal_numero: 1, via_principal_letra: 1, via_principal_bis: 1, via_generadora_numero: 1, via_generadora_letra: 1, via_generadora_bis: 1, placa: 1, id_barrio: 1 }, { unique: true });

//esquema colección hist_clinicas

db.createCollection("hist_clinicas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["num_hc", "fecha_creacion", "ult_actualizacion"],
            properties: {
                num_hc: {
                    bsonType: "string",
                    pattern: "^HC-[0-9]{4}-[0-9]{5}$"
                },
                fecha_creacion: {
                    bsonType: "date"
                },
                ult_actualizacion: {
                    bsonType: "date"
                }
            }
        }
    }
});

//índices colección hist_clinicas

db.hist_clinicas.createIndex({ num_hc: 1 }, { unique: true });

//esquema colección visitas_medicas

db.createCollection("visitas_medicas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fecha_hora", "id_medico", "id_paciente", "evolucion"],
            properties: {
                fecha_hora: {
                    bsonType: "date"
                },
                id_medico: {
                    bsonType: "int"
                },
                id_paciente: {
                    bsonType: "int"
                },
                evolucion: {
                    bsonType: "string",
                    minLength: 15,
                    maxLength: 2000
                }
            }
        }
    }
});

//índices colección visitas_medicas

db.visitas_medicas.createIndex({ fecha_hora: 1, id_medico: 1, id_paciente: 1 }, { unique: true });

//esquema colección pacientes_seguros

db.createCollection("pacientes_seguros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_paciente", "id_seguro"],
            properties: {
                id_paciente: {
                    bsonType: "int"
                },
                id_seguro: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección pacientes_seguros

db.pacientes_seguros.createIndex({ id_paciente: 1, id_seguro: 1 }, { unique: true });

//esquema colección seguros

db.createCollection("seguros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "id_tipo", "num_poliza", "id_estado"],
            properties: {
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    maxLength: 50
                },
                id_tipo: {
                    bsonType: "int"
                },
                num_poliza: {
                    bsonType: "string",
                    pattern: "^[A-Z0-9-]{6,16}$"
                },
                id_estado: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección seguros

db.seguros.createIndex({ num_poliza: 1 }, { unique: true });
db.seguros.createIndex({ nombre: 1, id_tipo: 1 }, { unique: true });

//esquema colección tipos_seguros

db.createCollection("tipos_seguros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["tipo"],
            properties: {
                tipo: {
                    bsonType: "string",
                    enum: [
                        "Régimen Contributivo",
                        "Régimen Subsidiado",
                        "Medicina Prepagada",
                        "Póliza Privada",
                        "Plan Complementario EPS",
                        "Régimen Especial del Estado",
                        "Seguro por Evento o Temporal"
                    ]
                }
            }
        }
    }
})

//índices colección tipos_seguros

db.tipos_seguros.createIndex({ tipo: 1 }, { unique: true });

//esquema colección estados_seguros

db.createCollection("estados_seguros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["estado", "activo"],
            properties: {
                estado: {
                    bsonType: "string",
                    enum: [
                        "Activo",
                        "Suspendido",
                        "En revisión",
                        "Cancelado",
                        "Vencido",
                        "En liquidación",
                        "Histórico"
                    ]
                },
                activo: {
                    bsonType: "bool"
                }
            }
        }
    }
})

//índices colección estados_seguros

db.estados_seguros.createIndex({ estado: 1 }, { unique: true });  

//esquema colección medicos_especialidades

db.createCollection("medicos_especialidades", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_medico", "id_especialidad"],
            properties: {
                id_medico: {
                    bsonType: "int"
                },
                id_especialidad: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección medicos_especialidades

db.medicos_especialidades.createIndex({ id_medico: 1, id_especialidad: 1 }, { unique: true });

//esquema colección especialidades

db.createCollection("especialidades", {
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
                        "Ginecología",
                        "Cardiología",
                        "Neurología",
                        "Dermatología",
                        "Ortopedia",
                        "Cirugía General",
                        "Anestesiología",
                        "Psiquiatría",
                        "Urología",
                        "Oncología",
                        "Endocrinología",
                        "Nefrología",
                        "Reumatología",
                        "Gastroenterología",
                        "Neumología",
                        "Infectología",
                        "Otros"
                    ]
                }
            }
        }
    }
});

//índices colección especialidades

db.especialidades.createIndex({ nombre: 1 }, { unique: true });

//esquema colección hist_clinicas_alergias

db.createCollection("hist_clinicas_alergias", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_hist_clinica", "id_alergia"],
            properties: {
                id_hist_clinica: {
                    bsonType: "int"
                },
                id_alergia: {
                    bsonType: "int"
                }
            }
        }
    }
});

//índices colección hist_clinicas_alergias

db.hist_clinicas_alergias.createIndex({ id_hist_clinica: 1, id_alergia: 1 }, { unique: true });

//esquema colección alergias

db.createCollection("alergias", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    maxLength: 100
                }
            }
        }
    }
});

//índices colección alergias

db.alergias.createIndex({ nombre: 1 }, { unique: true });