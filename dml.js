//inserciones dir_generales

db.dir_generales.insertMany([
    {
        _id: 1,
        primer_nombre: 'Carlos',
        primer_apellido: 'Gómez',
        segundo_apellido: 'Rincón',
        tel: '3123456789',
        correo_el: 'carlos.gomez@gmail.com',
        num_lic_gestion: 'HOS-1234567',
        salario: NumberDecimal('12500000')
    },
    {
        _id: 2,
        primer_nombre: 'Diana',
        segundo_nombre: 'María',
        primer_apellido: 'Pérez',
        segundo_apellido: 'Suárez',
        tel: '3001234567',
        correo_el: 'diana.perez@hotmail.com',
        num_lic_gestion: 'HOS-7654321',
        salario: NumberDecimal('13000000')
    },
    {
        _id: 3,
        primer_nombre: 'Jorge',
        primer_apellido: 'Martínez',
        segundo_apellido: 'Ortiz',
        tel: '3012345678',
        correo_el: 'jorge.martinez@yahoo.com',
        num_lic_gestion: 'HOS-2345678',
        salario: NumberDecimal('11800000')
    }
]);

//inserciones barrios

db.barrios.insertMany([
    { _id: 1, nombre: "Cabecera del Llano", municipio: "Bucaramanga" },
    { _id: 2, nombre: "La Cumbre", municipio: "Floridablanca" },
    { _id: 3, nombre: "Altos de Betania", municipio: "Piedecuesta" },
    { _id: 4, nombre: "San Francisco", municipio: "Bucaramanga" },
    { _id: 5, nombre: "Cañaveral", municipio: "Floridablanca" },
    { _id: 6, nombre: "Conucos", municipio: "Bucaramanga" },
    { _id: 7, nombre: "Morrorico", municipio: "Bucaramanga" },
    { _id: 8, nombre: "Alarcon", municipio: "Bucaramanga" },
    { _id: 9, nombre: "Mutis", municipio: "Bucaramanga" },
    { _id: 10, nombre: "Provenza", municipio: "Bucaramanga" },
    { _id: 11, nombre: "Real de Minas", municipio: "Bucaramanga" },
    { _id: 12, nombre: "Girardot", municipio: "Bucaramanga" },
    { _id: 13, nombre: "Cabecera", municipio: "Bucaramanga" },
    { _id: 14, nombre: "El Prado", municipio: "Bucaramanga" },
    { _id: 15, nombre: "Altos de Cabecera", municipio: "Bucaramanga" },
    { _id: 16, nombre: "Sotomayor", municipio: "Bucaramanga" },
    { _id: 17, nombre: "Gaitán", municipio: "Bucaramanga" },
    { _id: 18, nombre: "Antonia Santos", municipio: "Bucaramanga" },
    { _id: 19, nombre: "La Aurora", municipio: "Floridablanca" },
    { _id: 20, nombre: "Villa Piedra del Sol", municipio: "Floridablanca" },
    { _id: 21, nombre: "Zapamanga", municipio: "Floridablanca" },
    { _id: 22, nombre: "Rosalinda", municipio: "Floridablanca" },
    { _id: 23, nombre: "Villabel", municipio: "Floridablanca" },
    { _id: 24, nombre: "El Bosque", municipio: "Piedecuesta" },
    { _id: 25, nombre: "El Recreo", municipio: "Piedecuesta" },
    { _id: 26, nombre: "Barroblanco", municipio: "Girón" },
    { _id: 27, nombre: "El Poblado", municipio: "Girón" },
    { _id: 28, nombre: "Aguas Claras", municipio: "Girón" }
]);

//inserciones hospitales

db.hospitales.insertMany([
    {
        _id: 1,
        nombre: "Hospital Universitario de Santander",
        via_principal_tipo: "Carrera",
        via_principal_numero: "33",
        via_principal_letra: "A",
        via_principal_bis: false,
        via_generadora_numero: "29",
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: "100",
        id_barrio: 1,
        tel: "6076321234",
        id_dir_general: 1
    },
    {
        _id: 2,
        nombre: "Clínica Chicamocha",
        via_principal_tipo: "Avenida",
        via_principal_numero: "28",
        via_principal_letra: "B",
        via_principal_bis: true,
        via_generadora_numero: "45",
        via_generadora_letra: "C",
        via_generadora_bis: false,
        placa: "76",
        id_barrio: 9,
        tel: "6076453210",
        id_dir_general: 2
    },
    {
        _id: 3,
        nombre: "Hospital Internacional de Colombia",
        via_principal_tipo: "Autopista",
        via_principal_numero: "60",
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: "12",
        via_generadora_letra: "D",
        via_generadora_bis: true,
        placa: "5",
        id_barrio: 20,
        tel: "6076789456",
        id_dir_general: 3
    },
    {
        _id: 4,
        nombre: "Clínica Foscal",
        via_principal_tipo: "Diagonal",
        via_principal_numero: "15",
        via_principal_letra: "C",
        via_principal_bis: true,
        via_generadora_numero: "30",
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: "25",
        id_barrio: 5,
        tel: "6076239874",
        id_dir_general: 1
    },
    {
        _id: 5,
        nombre: "Hospital San Juan de Dios",
        via_principal_tipo: "Calle",
        via_principal_numero: "19",
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: "11",
        via_generadora_letra: "A",
        via_generadora_bis: true,
        placa: "90",
        id_barrio: 27,
        tel: "6076984123",
        id_dir_general: 2
    }
]);

//inserciones areas_especializadas

db.areas_especializadas.insertMany([
    { _id: 1, nombre: "Medicina Interna" },
    { _id: 2, nombre: "Pediatría" },
    { _id: 3, nombre: "Ginecología y Obstetricia" },
    { _id: 4, nombre: "Cirugía General" },
    { _id: 5, nombre: "Ortopedia y Traumatología" },
    { _id: 6, nombre: "Cardiología" },
    { _id: 7, nombre: "Neurología" },
    { _id: 8, nombre: "Oncología" },
    { _id: 9, nombre: "Dermatología" },
    { _id: 10, nombre: "Psiquiatría" },
    { _id: 11, nombre: "Oftalmología" },
    { _id: 12, nombre: "Otorrinolaringología" },
    { _id: 13, nombre: "Urología" },
    { _id: 14, nombre: "Gastroenterología" },
    { _id: 15, nombre: "Nefrología" },
    { _id: 16, nombre: "Neumología" },
    { _id: 17, nombre: "Reumatología" },
    { _id: 18, nombre: "Anestesiología" },
    { _id: 19, nombre: "Urgencias" },
    { _id: 20, nombre: "Unidad de Cuidados Intensivos (UCI)" },
    { _id: 21, nombre: "Medicina Nuclear" },
    { _id: 22, nombre: "Radiología" },
    { _id: 23, nombre: "Rehabilitación y Fisioterapia" },
    { _id: 24, nombre: "Medicina Familiar" },
    { _id: 25, nombre: "Medicina del Trabajo" },
    { _id: 26, nombre: "Hemato-oncología" },
    { _id: 27, nombre: "Infectología" },
    { _id: 28, nombre: "Otros" }
]);

//inserciones hospitales_areas_especializadas

db.hospitales_areas_especializadas.insertMany([
    { id_hospital: 1, id_area_especializada: 19 },
    { id_hospital: 1, id_area_especializada: 26 },
    { id_hospital: 1, id_area_especializada: 22 },
    { id_hospital: 1, id_area_especializada: 7 },
    { id_hospital: 1, id_area_especializada: 15 },
    { id_hospital: 1, id_area_especializada: 14 },
    { id_hospital: 1, id_area_especializada: 18 },
    { id_hospital: 1, id_area_especializada: 13 },
    { id_hospital: 2, id_area_especializada: 5 },
    { id_hospital: 2, id_area_especializada: 3 },
    { id_hospital: 2, id_area_especializada: 25 },
    { id_hospital: 2, id_area_especializada: 10 },
    { id_hospital: 2, id_area_especializada: 23 },
    { id_hospital: 2, id_area_especializada: 8 },
    { id_hospital: 2, id_area_especializada: 27 },
    { id_hospital: 3, id_area_especializada: 19 },
    { id_hospital: 3, id_area_especializada: 13 },
    { id_hospital: 3, id_area_especializada: 21 },
    { id_hospital: 3, id_area_especializada: 17 },
    { id_hospital: 3, id_area_especializada: 27 },
    { id_hospital: 3, id_area_especializada: 22 },
    { id_hospital: 3, id_area_especializada: 1 },
    { id_hospital: 4, id_area_especializada: 22 },
    { id_hospital: 4, id_area_especializada: 10 },
    { id_hospital: 4, id_area_especializada: 25 },
    { id_hospital: 4, id_area_especializada: 9 },
    { id_hospital: 4, id_area_especializada: 21 },
    { id_hospital: 4, id_area_especializada: 8 },
    { id_hospital: 4, id_area_especializada: 19 },
    { id_hospital: 4, id_area_especializada: 18 },
    { id_hospital: 5, id_area_especializada: 19 },
    { id_hospital: 5, id_area_especializada: 27 },
    { id_hospital: 5, id_area_especializada: 7 },
    { id_hospital: 5, id_area_especializada: 17 },
    { id_hospital: 5, id_area_especializada: 1 }
]);
