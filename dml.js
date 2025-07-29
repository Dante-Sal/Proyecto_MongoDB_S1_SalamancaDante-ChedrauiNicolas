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

//inserciones per_mantenimiento

db.per_mantenimiento.insertMany([
    {
        _id: 1,
        primer_nombre: 'Dora',
        segundo_nombre: 'Toribio',
        primer_apellido: 'Cal',
        segundo_apellido: 'Bonilla',
        tel: '3894687627',
        correo_el: 'dora.cal114@gmail.com',
        tipo_trabajo: 'Otros',
        salario: NumberDecimal('3350000'),
        id_hospital: 4
    },
    {
        _id: 2,
        primer_nombre: 'Inocencio',
        primer_apellido: 'Luna',
        segundo_apellido: 'Galan',
        tel: '3369567960',
        correo_el: 'inocencio.luna296@gmail.com',
        tipo_trabajo: 'Refrigeración',
        salario: NumberDecimal('1550000'),
        id_hospital: 5
    },
    {
        _id: 3,
        primer_nombre: 'Sara',
        primer_apellido: 'Gutierrez',
        segundo_apellido: 'Guijarro',
        tel: '3557442785',
        correo_el: 'sara.gutierrez86@gmail.com',
        tipo_trabajo: 'Sistemas contra incendios',
        salario: NumberDecimal('1550000'),
        id_hospital: 3
    },
    {
        _id: 4,
        primer_nombre: 'Ceferino',
        primer_apellido: 'Sosa',
        segundo_apellido: 'Cobos',
        tel: '3606229815',
        correo_el: 'ceferino.sosa51@gmail.com',
        tipo_trabajo: 'Plomería',
        salario: NumberDecimal('3000000'),
        id_hospital: 4
    },
    {
        _id: 5,
        primer_nombre: 'Teodoro',
        primer_apellido: 'Alvarez',
        segundo_apellido: 'Gonzalo',
        tel: '3362971411',
        correo_el: 'teodoro.alvarez864@gmail.com',
        tipo_trabajo: 'Pintura',
        salario: NumberDecimal('3350000'),
        id_hospital: 3
    },
    {
        _id: 6,
        primer_nombre: 'Manola',
        segundo_nombre: 'Angelina',
        primer_apellido: 'Castelló',
        segundo_apellido: 'Salas',
        tel: '3501606052',
        correo_el: 'manola.castello97@gmail.com',
        tipo_trabajo: 'Otros',
        salario: NumberDecimal('3200000'),
        id_hospital: 2
    },
    {
        _id: 7,
        primer_nombre: 'Albano',
        segundo_nombre: 'Encarnita',
        primer_apellido: 'Julián',
        segundo_apellido: 'Alegre',
        tel: '3831356629',
        correo_el: 'albano.julian400@gmail.com',
        tipo_trabajo: 'Desinfección y bioseguridad',
        salario: NumberDecimal('1850000'),
        id_hospital: 3
    },
    {
        _id: 8,
        primer_nombre: 'Nereida',
        primer_apellido: 'Toro',
        segundo_apellido: 'Bastida',
        tel: '3945937022',
        correo_el: 'nereida.toro483@gmail.com',
        tipo_trabajo: 'Ascensores y escaleras eléctricas',
        salario: NumberDecimal('2950000'),
        id_hospital: 3
    },
    {
        _id: 9,
        primer_nombre: 'Anastasia',
        segundo_nombre: 'Angelita',
        primer_apellido: 'Baños',
        segundo_apellido: 'Camacho',
        tel: '3681527312',
        correo_el: 'anastasia.banos451@gmail.com',
        tipo_trabajo: 'Redes y cableado',
        salario: NumberDecimal('2900000'),
        id_hospital: 5
    },
    {
        _id: 10,
        primer_nombre: 'Luisa',
        primer_apellido: 'Polo',
        segundo_apellido: 'Milla',
        tel: '3054342423',
        correo_el: 'luisa.polo830@gmail.com',
        tipo_trabajo: 'Mecánica hospitalaria',
        salario: NumberDecimal('3100000'),
        id_hospital: 5
    },
    {
        _id: 11,
        primer_nombre: 'Pablo',
        primer_apellido: 'Gomila',
        segundo_apellido: 'Arteaga',
        tel: '3394321477',
        correo_el: 'pablo.gomila157@gmail.com',
        tipo_trabajo: 'Sistemas contra incendios',
        salario: NumberDecimal('1650000'),
        id_hospital: 4
    },
    {
        _id: 12,
        primer_nombre: 'Esteban',
        segundo_nombre: 'Roxana',
        primer_apellido: 'Domínguez',
        segundo_apellido: 'Cuevas',
        tel: '3276554223',
        correo_el: 'esteban.dominguez175@gmail.com',
        tipo_trabajo: 'Jardinería',
        salario: NumberDecimal('2950000'),
        id_hospital: 3
    },
    {
        _id: 13,
        primer_nombre: 'Juliana',
        primer_apellido: 'Cánovas',
        segundo_apellido: 'Alfaro',
        tel: '3513978403',
        correo_el: 'juliana.canovas167@gmail.com',
        tipo_trabajo: 'Mecánica hospitalaria',
        salario: NumberDecimal('3350000'),
        id_hospital: 5
    },
    {
        _id: 14,
        primer_nombre: 'Verónica',
        segundo_nombre: 'Luisa',
        primer_apellido: 'Escolano',
        segundo_apellido: 'Rodríguez',
        tel: '3309117137',
        correo_el: 'veronica.escolano358@gmail.com',
        tipo_trabajo: 'Jardinería',
        salario: NumberDecimal('3650000'),
        id_hospital: 5
    },
    {
        _id: 15,
        primer_nombre: 'Ariel',
        primer_apellido: 'Mir',
        segundo_apellido: 'Bauzá',
        tel: '3574099402',
        correo_el: 'ariel.mir312@gmail.com',
        tipo_trabajo: 'Limpieza',
        salario: NumberDecimal('3700000'),
        id_hospital: 5
    },
    {
        _id: 16,
        primer_nombre: 'Claudia',
        segundo_nombre: 'Luisa',
        primer_apellido: 'Salgado',
        segundo_apellido: 'Cañizares',
        tel: '3365783208',
        correo_el: 'claudia.salgado442@gmail.com',
        tipo_trabajo: 'Desinfección y bioseguridad',
        salario: NumberDecimal('3150000'),
        id_hospital: 4
    },
    {
        _id: 17,
        primer_nombre: 'Guadalupe',
        primer_apellido: 'Fernandez',
        segundo_apellido: 'Mayoral',
        tel: '3218736403',
        correo_el: 'guadalupe.fernandez821@gmail.com',
        tipo_trabajo: 'Plomería',
        salario: NumberDecimal('3700000'),
        id_hospital: 1
    },
    {
        _id: 18,
        primer_nombre: 'Alfredo',
        segundo_nombre: 'Balduino',
        primer_apellido: 'Jurado',
        segundo_apellido: 'Ponce',
        tel: '3823027408',
        correo_el: 'alfredo.jurado916@gmail.com',
        tipo_trabajo: 'Pintura',
        salario: NumberDecimal('2600000'),
        id_hospital: 5
    },
    {
        _id: 19,
        primer_nombre: 'Gabriela',
        primer_apellido: 'Arellano',
        segundo_apellido: 'Gelabert',
        tel: '3207700922',
        correo_el: 'gabriela.arellano611@gmail.com',
        tipo_trabajo: 'Otros',
        salario: NumberDecimal('3150000'),
        id_hospital: 4
    },
    {
        _id: 20,
        primer_nombre: 'Rafa',
        primer_apellido: 'Lloret',
        segundo_apellido: 'Molina',
        tel: '3249223981',
        correo_el: 'rafa.lloret474@gmail.com',
        tipo_trabajo: 'Jardinería',
        salario: NumberDecimal('2450000'),
        id_hospital: 2
    },
    {
        _id: 21,
        primer_nombre: 'Lucas',
        segundo_nombre: 'Pepe',
        primer_apellido: 'Lobo',
        segundo_apellido: 'Juárez',
        tel: '3148413189',
        correo_el: 'lucas.lobo990@gmail.com',
        tipo_trabajo: 'Pintura',
        salario: NumberDecimal('1950000'),
        id_hospital: 1
    },
    {
        _id: 22,
        primer_nombre: 'Juana',
        segundo_nombre: 'Jennifer',
        primer_apellido: 'Arcos',
        segundo_apellido: 'Linares',
        tel: '3399719843',
        correo_el: 'juana.arcos52@gmail.com',
        tipo_trabajo: 'Refrigeración',
        salario: NumberDecimal('2600000'),
        id_hospital: 3
    },
    {
        _id: 23,
        primer_nombre: 'Cruz',
        segundo_nombre: 'León',
        primer_apellido: 'Coronado',
        segundo_apellido: 'Sancho',
        tel: '3131232025',
        correo_el: 'cruz.coronado658@gmail.com',
        tipo_trabajo: 'Limpieza',
        salario: NumberDecimal('1450000'),
        id_hospital: 3
    },
    {
        _id: 24,
        primer_nombre: 'Andrea',
        segundo_nombre: 'Elena',
        primer_apellido: 'Carro',
        segundo_apellido: 'Romeu',
        tel: '3426857168',
        correo_el: 'andrea.carro413@gmail.com',
        tipo_trabajo: 'Ascensores y escaleras eléctricas',
        salario: NumberDecimal('3400000'),
        id_hospital: 2
    },
    {
        _id: 25,
        primer_nombre: 'Marina',
        primer_apellido: 'Bayón',
        segundo_apellido: 'Rios',
        tel: '3058396316',
        correo_el: 'marina.bayon106@gmail.com',
        tipo_trabajo: 'Carpintería',
        salario: NumberDecimal('1900000'),
        id_hospital: 3
    }
]);

//inserciones direcciones_pacientes

db.direcciones_pacientes.insertMany([
    {
        _id: 1,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '111',
        via_principal_letra: 'E',
        via_principal_bis: true,
        via_generadora_numero: '4',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '17',
        id_barrio: 17
    },
    {
        _id: 2,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '140',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '105',
        via_generadora_letra: 'C',
        via_generadora_bis: true,
        placa: '12',
        id_barrio: 25
    },
    {
        _id: 3,
        via_principal_tipo: 'Calle',
        via_principal_numero: '67',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '60',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '61',
        id_barrio: 26
    },
    {
        _id: 4,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '104',
        via_principal_letra: null,
        via_principal_bis: true,
        via_generadora_numero: '6',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '112',
        id_barrio: 13
    },
    {
        _id: 5,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '94',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '106',
        via_generadora_letra: 'D',
        via_generadora_bis: false,
        placa: '19',
        id_barrio: 29
    },
    {
        _id: 6,
        via_principal_tipo: 'Calle',
        via_principal_numero: '116',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '96',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '39',
        id_barrio: 26
    },
    {
        _id: 7,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '57',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '76',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '79',
        id_barrio: 29
    },
    {
        _id: 8,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '117',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '10',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '77',
        id_barrio: 17
    },
    {
        _id: 9,
        via_principal_tipo: 'Circular',
        via_principal_numero: '45',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '38',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '39',
        id_barrio: 20
    },
    {
        _id: 10,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '39',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '10',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '37',
        id_barrio: 3
    },
    {
        _id: 11,
        via_principal_tipo: 'Calle',
        via_principal_numero: '9',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '18',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '114',
        id_barrio: 18
    },
    {
        _id: 12,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '70',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '28',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '136',
        id_barrio: 22
    },
    {
        _id: 13,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '138',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '89',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '68',
        id_barrio: 10
    },
    {
        _id: 14,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '25',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '19',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '21',
        id_barrio: 13
    },
    {
        _id: 15,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '63',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '98',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '52',
        id_barrio: 1
    },
    {
        _id: 16,
        via_principal_tipo: 'Circular',
        via_principal_numero: '59',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '27',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '84',
        id_barrio: 14
    },
    {
        _id: 17,
        via_principal_tipo: 'Circular',
        via_principal_numero: '97',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '10',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '144',
        id_barrio: 30
    },
    {
        _id: 18,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '49',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '125',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '139',
        id_barrio: 30
    },
    {
        _id: 19,
        via_principal_tipo: 'Circular',
        via_principal_numero: '81',
        via_principal_letra: 'F',
        via_principal_bis: false,
        via_generadora_numero: '7',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '3',
        id_barrio: 26
    },
    {
        _id: 20,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '144',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '78',
        via_generadora_letra: 'D',
        via_generadora_bis: false,
        placa: '26',
        id_barrio: 2
    },
    {
        _id: 21,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '55',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '42',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '36',
        id_barrio: 24
    },
    {
        _id: 22,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '33',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '106',
        via_generadora_letra: 'E',
        via_generadora_bis: true,
        placa: '75',
        id_barrio: 3
    },
    {
        _id: 23,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '136',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '63',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '102',
        id_barrio: 4
    },
    {
        _id: 24,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '71',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '47',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '110',
        id_barrio: 30
    },
    {
        _id: 25,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '89',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '33',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '128',
        id_barrio: 1
    },
    {
        _id: 26,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '86',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '20',
        via_generadora_letra: 'E',
        via_generadora_bis: false,
        placa: '143',
        id_barrio: 15
    },
    {
        _id: 27,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '38',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '62',
        via_generadora_letra: 'F',
        via_generadora_bis: false,
        placa: '45',
        id_barrio: 11
    },
    {
        _id: 28,
        via_principal_tipo: 'Calle',
        via_principal_numero: '1',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '92',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '116',
        id_barrio: 10
    },
    {
        _id: 29,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '125',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '61',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '51',
        id_barrio: 10
    },
    {
        _id: 30,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '17',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '129',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '124',
        id_barrio: 11
    },
    {
        _id: 31,
        via_principal_tipo: 'Calle',
        via_principal_numero: '70',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '10',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '75',
        id_barrio: 11
    },
    {
        _id: 32,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '14',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '81',
        via_generadora_letra: 'F',
        via_generadora_bis: false,
        placa: '52',
        id_barrio: 27
    },
    {
        _id: 33,
        via_principal_tipo: 'Circular',
        via_principal_numero: '60',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '121',
        via_generadora_letra: 'C',
        via_generadora_bis: true,
        placa: '89',
        id_barrio: 5
    },
    {
        _id: 34,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '146',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '98',
        via_generadora_letra: 'E',
        via_generadora_bis: false,
        placa: '120',
        id_barrio: 17
    },
    {
        _id: 35,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '62',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '6',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '62',
        id_barrio: 8
    },
    {
        _id: 36,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '27',
        via_principal_letra: 'F',
        via_principal_bis: false,
        via_generadora_numero: '48',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '137',
        id_barrio: 27
    },
    {
        _id: 37,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '46',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '47',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '113',
        id_barrio: 25
    },
    {
        _id: 38,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '35',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '34',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '16',
        id_barrio: 3
    },
    {
        _id: 39,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '53',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '21',
        via_generadora_letra: 'E',
        via_generadora_bis: true,
        placa: '123',
        id_barrio: 26
    },
    {
        _id: 40,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '70',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '137',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '89',
        id_barrio: 4
    },
    {
        _id: 41,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '13',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '96',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '79',
        id_barrio: 22
    },
    {
        _id: 42,
        via_principal_tipo: 'Calle',
        via_principal_numero: '68',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '15',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '33',
        id_barrio: 24
    },
    {
        _id: 43,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '86',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '99',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '37',
        id_barrio: 17
    },
    {
        _id: 44,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '109',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '122',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '47',
        id_barrio: 28
    },
    {
        _id: 45,
        via_principal_tipo: 'Circular',
        via_principal_numero: '77',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '123',
        via_generadora_letra: 'F',
        via_generadora_bis: false,
        placa: '27',
        id_barrio: 25
    },
    {
        _id: 46,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '110',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '65',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '50',
        id_barrio: 27
    },
    {
        _id: 47,
        via_principal_tipo: 'Circular',
        via_principal_numero: '17',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '106',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '93',
        id_barrio: 2
    },
    {
        _id: 48,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '15',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '5',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '46',
        id_barrio: 27
    },
    {
        _id: 49,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '135',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '129',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '6',
        id_barrio: 15
    },
    {
        _id: 50,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '132',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '95',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '142',
        id_barrio: 5
    },
    {
        _id: 51,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '2',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '5',
        via_generadora_letra: 'F',
        via_generadora_bis: false,
        placa: '110',
        id_barrio: 12
    },
    {
        _id: 52,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '57',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '137',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '68',
        id_barrio: 24
    },
    {
        _id: 53,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '55',
        via_principal_letra: 'E',
        via_principal_bis: true,
        via_generadora_numero: '133',
        via_generadora_letra: 'D',
        via_generadora_bis: false,
        placa: '127',
        id_barrio: 8
    },
    {
        _id: 54,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '142',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '100',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '71',
        id_barrio: 7
    },
    {
        _id: 55,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '128',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '53',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '135',
        id_barrio: 12
    },
    {
        _id: 56,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '31',
        via_principal_letra: 'F',
        via_principal_bis: true,
        via_generadora_numero: '86',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '43',
        id_barrio: 30
    },
    {
        _id: 57,
        via_principal_tipo: 'Calle',
        via_principal_numero: '98',
        via_principal_letra: 'F',
        via_principal_bis: false,
        via_generadora_numero: '12',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '5',
        id_barrio: 5
    },
    {
        _id: 58,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '91',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '64',
        via_generadora_letra: 'F',
        via_generadora_bis: false,
        placa: '46',
        id_barrio: 29
    },
    {
        _id: 59,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '79',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '58',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '123',
        id_barrio: 6
    },
    {
        _id: 60,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '89',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '90',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '15',
        id_barrio: 16
    },
    {
        _id: 61,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '99',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '74',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '62',
        id_barrio: 3
    },
    {
        _id: 62,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '146',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '28',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '25',
        id_barrio: 5
    },
    {
        _id: 63,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '127',
        via_principal_letra: null,
        via_principal_bis: true,
        via_generadora_numero: '79',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '77',
        id_barrio: 6
    },
    {
        _id: 64,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '100',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '73',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '27',
        id_barrio: 19
    },
    {
        _id: 65,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '38',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '128',
        via_generadora_letra: 'E',
        via_generadora_bis: false,
        placa: '92',
        id_barrio: 14
    },
    {
        _id: 66,
        via_principal_tipo: 'Calle',
        via_principal_numero: '135',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '143',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '15',
        id_barrio: 2
    },
    {
        _id: 67,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '137',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '150',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '34',
        id_barrio: 23
    },
    {
        _id: 68,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '7',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '134',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '24',
        id_barrio: 3
    },
    {
        _id: 69,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '45',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '23',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '15',
        id_barrio: 3
    },
    {
        _id: 70,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '86',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '128',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '29',
        id_barrio: 13
    },
    {
        _id: 71,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '72',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '22',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '26',
        id_barrio: 23
    },
    {
        _id: 72,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '83',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '36',
        via_generadora_letra: 'E',
        via_generadora_bis: true,
        placa: '54',
        id_barrio: 1
    },
    {
        _id: 73,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '137',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '13',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '139',
        id_barrio: 18
    },
    {
        _id: 74,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '4',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '18',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '141',
        id_barrio: 10
    },
    {
        _id: 75,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '110',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '35',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '73',
        id_barrio: 27
    },
    {
        _id: 76,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '52',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '133',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '92',
        id_barrio: 17
    },
    {
        _id: 77,
        via_principal_tipo: 'Calle',
        via_principal_numero: '7',
        via_principal_letra: null,
        via_principal_bis: true,
        via_generadora_numero: '4',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '127',
        id_barrio: 30
    },
    {
        _id: 78,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '73',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '119',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '34',
        id_barrio: 17
    },
    {
        _id: 79,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '79',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '11',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '18',
        id_barrio: 2
    },
    {
        _id: 80,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '82',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '144',
        via_generadora_letra: 'A',
        via_generadora_bis: true,
        placa: '135',
        id_barrio: 11
    },
    {
        _id: 81,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '33',
        via_principal_letra: 'F',
        via_principal_bis: false,
        via_generadora_numero: '87',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '69',
        id_barrio: 17
    },
    {
        _id: 82,
        via_principal_tipo: 'Circular',
        via_principal_numero: '102',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '46',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '117',
        id_barrio: 5
    },
    {
        _id: 83,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '48',
        via_principal_letra: 'G',
        via_principal_bis: true,
        via_generadora_numero: '7',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '112',
        id_barrio: 9
    },
    {
        _id: 84,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '147',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '144',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '54',
        id_barrio: 27
    },
    {
        _id: 85,
        via_principal_tipo: 'Circular',
        via_principal_numero: '98',
        via_principal_letra: 'F',
        via_principal_bis: true,
        via_generadora_numero: '109',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '38',
        id_barrio: 1
    },
    {
        _id: 86,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '109',
        via_principal_letra: null,
        via_principal_bis: true,
        via_generadora_numero: '12',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '107',
        id_barrio: 22
    },
    {
        _id: 87,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '30',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '134',
        via_generadora_letra: 'E',
        via_generadora_bis: true,
        placa: '55',
        id_barrio: 11
    },
    {
        _id: 88,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '94',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '96',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '71',
        id_barrio: 1
    },
    {
        _id: 89,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '19',
        via_principal_letra: 'F',
        via_principal_bis: true,
        via_generadora_numero: '134',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '42',
        id_barrio: 24
    },
    {
        _id: 90,
        via_principal_tipo: 'Transversal',
        via_principal_numero: '38',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '30',
        via_generadora_letra: 'C',
        via_generadora_bis: false,
        placa: '90',
        id_barrio: 10
    },
    {
        _id: 91,
        via_principal_tipo: 'Calle',
        via_principal_numero: '64',
        via_principal_letra: 'B',
        via_principal_bis: false,
        via_generadora_numero: '65',
        via_generadora_letra: 'G',
        via_generadora_bis: false,
        placa: '67',
        id_barrio: 29
    },
    {
        _id: 92,
        via_principal_tipo: 'Circular',
        via_principal_numero: '144',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '143',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '124',
        id_barrio: 16
    },
    {
        _id: 93,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '23',
        via_principal_letra: 'C',
        via_principal_bis: true,
        via_generadora_numero: '142',
        via_generadora_letra: 'A',
        via_generadora_bis: false,
        placa: '39',
        id_barrio: 30
    },
    {
        _id: 94,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '35',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '23',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '57',
        id_barrio: 22
    },
    {
        _id: 95,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '93',
        via_principal_letra: 'C',
        via_principal_bis: false,
        via_generadora_numero: '81',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '85',
        id_barrio: 7
    },
    {
        _id: 96,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '89',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '133',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '69',
        id_barrio: 8
    },
    {
        _id: 97,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '117',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '64',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '144',
        id_barrio: 20
    },
    {
        _id: 98,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '109',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '42',
        via_generadora_letra: 'F',
        via_generadora_bis: true,
        placa: '11',
        id_barrio: 16
    },
    {
        _id: 99,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '27',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '9',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '59',
        id_barrio: 13
    },
    {
        _id: 100,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '2',
        via_principal_letra: 'B',
        via_principal_bis: true,
        via_generadora_numero: '133',
        via_generadora_letra: null,
        via_generadora_bis: true,
        placa: '3',
        id_barrio: 16
    },
    {
        _id: 101,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '126',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '44',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '18',
        id_barrio: 12
    },
    {
        _id: 102,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '120',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '18',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '97',
        id_barrio: 2
    },
    {
        _id: 103,
        via_principal_tipo: 'Carretera',
        via_principal_numero: '141',
        via_principal_letra: null,
        via_principal_bis: false,
        via_generadora_numero: '110',
        via_generadora_letra: 'D',
        via_generadora_bis: true,
        placa: '143',
        id_barrio: 14
    },
    {
        _id: 104,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '39',
        via_principal_letra: null,
        via_principal_bis: true,
        via_generadora_numero: '19',
        via_generadora_letra: null,
        via_generadora_bis: false,
        placa: '30',
        id_barrio: 14
    },
    {
        _id: 105,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '66',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '50',
        via_generadora_letra: 'D',
        via_generadora_bis: false,
        placa: '103',
        id_barrio: 19
    },
    {
        _id: 106,
        via_principal_tipo: 'Diagonal',
        via_principal_numero: '13',
        via_principal_letra: 'A',
        via_principal_bis: false,
        via_generadora_numero: '34',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '147',
        id_barrio: 22
    },
    {
        _id: 107,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '62',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '39',
        via_generadora_letra: 'C',
        via_generadora_bis: true,
        placa: '141',
        id_barrio: 24
    },
    {
        _id: 108,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '45',
        via_principal_letra: 'D',
        via_principal_bis: true,
        via_generadora_numero: '74',
        via_generadora_letra: 'E',
        via_generadora_bis: false,
        placa: '92',
        id_barrio: 15
    },
    {
        _id: 109,
        via_principal_tipo: 'Avenida',
        via_principal_numero: '90',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '22',
        via_generadora_letra: 'D',
        via_generadora_bis: false,
        placa: '123',
        id_barrio: 19
    },
    {
        _id: 110,
        via_principal_tipo: 'Autopista',
        via_principal_numero: '88',
        via_principal_letra: 'E',
        via_principal_bis: false,
        via_generadora_numero: '16',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '78',
        id_barrio: 23
    },
    {
        _id: 111,
        via_principal_tipo: 'Circular',
        via_principal_numero: '122',
        via_principal_letra: 'F',
        via_principal_bis: false,
        via_generadora_numero: '121',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '52',
        id_barrio: 1
    },
    {
        _id: 112,
        via_principal_tipo: 'Troncal',
        via_principal_numero: '63',
        via_principal_letra: 'E',
        via_principal_bis: true,
        via_generadora_numero: '111',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '145',
        id_barrio: 4
    },
    {
        _id: 113,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '20',
        via_principal_letra: 'D',
        via_principal_bis: false,
        via_generadora_numero: '2',
        via_generadora_letra: 'B',
        via_generadora_bis: true,
        placa: '72',
        id_barrio: 6
    },
    {
        _id: 114,
        via_principal_tipo: 'Carrera',
        via_principal_numero: '49',
        via_principal_letra: 'A',
        via_principal_bis: true,
        via_generadora_numero: '38',
        via_generadora_letra: 'G',
        via_generadora_bis: true,
        placa: '145',
        id_barrio: 5
    },
    {
        _id: 115,
        via_principal_tipo: 'Bulevar',
        via_principal_numero: '148',
        via_principal_letra: 'G',
        via_principal_bis: false,
        via_generadora_numero: '62',
        via_generadora_letra: 'B',
        via_generadora_bis: false,
        placa: '77',
        id_barrio: 11
    }
]);

//inserciones hist_clinicas

db.hist_clinicas.insertMany([
    {
        _id: 1,
        num_hc: "HC-5707-20526",
        fecha_creacion: ISODate("2022-03-12T00:00:00"),
        ult_actualizacion: ISODate("2023-02-05T00:00:00")
    },
    {
        _id: 2,
        num_hc: "HC-8141-34688",
        fecha_creacion: ISODate("2021-12-17T00:00:00"),
        ult_actualizacion: ISODate("2022-09-30T00:00:00")
    },
    {
        _id: 3,
        num_hc: "HC-9494-45111",
        fecha_creacion: ISODate("2021-11-03T00:00:00"),
        ult_actualizacion: ISODate("2021-12-14T00:00:00")
    },
    {
        _id: 4,
        num_hc: "HC-4619-75026",
        fecha_creacion: ISODate("2020-10-09T00:00:00"),
        ult_actualizacion: ISODate("2021-05-10T00:00:00")
    },
    {
        _id: 5,
        num_hc: "HC-0741-77720",
        fecha_creacion: ISODate("2020-10-29T00:00:00"),
        ult_actualizacion: ISODate("2021-09-08T00:00:00")
    },
    {
        _id: 6,
        num_hc: "HC-3159-55876",
        fecha_creacion: ISODate("2021-09-01T00:00:00"),
        ult_actualizacion: ISODate("2022-05-08T00:00:00")
    },
    {
        _id: 7,
        num_hc: "HC-6420-53599",
        fecha_creacion: ISODate("2022-03-11T00:00:00"),
        ult_actualizacion: ISODate("2022-09-27T00:00:00")
    },
    {
        _id: 8,
        num_hc: "HC-0662-89728",
        fecha_creacion: ISODate("2020-01-30T00:00:00"),
        ult_actualizacion: ISODate("2020-09-28T00:00:00")
    },
    {
        _id: 9,
        num_hc: "HC-2715-45719",
        fecha_creacion: ISODate("2020-04-07T00:00:00"),
        ult_actualizacion: ISODate("2020-06-30T00:00:00")
    },
    {
        _id: 10,
        num_hc: "HC-7377-26050",
        fecha_creacion: ISODate("2020-06-05T00:00:00"),
        ult_actualizacion: ISODate("2020-12-30T00:00:00")
    },
    {
        _id: 11,
        num_hc: "HC-9875-75115",
        fecha_creacion: ISODate("2020-07-26T00:00:00"),
        ult_actualizacion: ISODate("2021-02-26T00:00:00")
    },
    {
        _id: 12,
        num_hc: "HC-0286-96793",
        fecha_creacion: ISODate("2020-07-22T00:00:00"),
        ult_actualizacion: ISODate("2021-04-12T00:00:00")
    },
    {
        _id: 13,
        num_hc: "HC-6057-20192",
        fecha_creacion: ISODate("2021-07-31T00:00:00"),
        ult_actualizacion: ISODate("2021-11-15T00:00:00")
    },
    {
        _id: 14,
        num_hc: "HC-3213-71687",
        fecha_creacion: ISODate("2021-07-03T00:00:00"),
        ult_actualizacion: ISODate("2022-03-09T00:00:00")
    },
    {
        _id: 15,
        num_hc: "HC-5471-83537",
        fecha_creacion: ISODate("2021-12-23T00:00:00"),
        ult_actualizacion: ISODate("2022-03-18T00:00:00")
    },
    {
        _id: 16,
        num_hc: "HC-4262-30897",
        fecha_creacion: ISODate("2022-05-24T00:00:00"),
        ult_actualizacion: ISODate("2022-12-06T00:00:00")
    },
    {
        _id: 17,
        num_hc: "HC-8011-30702",
        fecha_creacion: ISODate("2020-02-03T00:00:00"),
        ult_actualizacion: ISODate("2020-04-26T00:00:00")
    },
    {
        _id: 18,
        num_hc: "HC-7454-28482",
        fecha_creacion: ISODate("2020-09-07T00:00:00"),
        ult_actualizacion: ISODate("2021-02-15T00:00:00")
    },
    {
        _id: 19,
        num_hc: "HC-3995-65518",
        fecha_creacion: ISODate("2020-06-29T00:00:00"),
        ult_actualizacion: ISODate("2021-02-24T00:00:00")
    },
    {
        _id: 20,
        num_hc: "HC-2503-19855",
        fecha_creacion: ISODate("2020-04-13T00:00:00"),
        ult_actualizacion: ISODate("2021-02-17T00:00:00")
    },
    {
        _id: 21,
        num_hc: "HC-0467-87759",
        fecha_creacion: ISODate("2021-08-06T00:00:00"),
        ult_actualizacion: ISODate("2022-06-02T00:00:00")
    },
    {
        _id: 22,
        num_hc: "HC-0155-61032",
        fecha_creacion: ISODate("2020-02-15T00:00:00"),
        ult_actualizacion: ISODate("2020-10-11T00:00:00")
    },
    {
        _id: 23,
        num_hc: "HC-9380-83030",
        fecha_creacion: ISODate("2021-01-29T00:00:00"),
        ult_actualizacion: ISODate("2021-10-15T00:00:00")
    },
    {
        _id: 24,
        num_hc: "HC-5671-83180",
        fecha_creacion: ISODate("2022-08-30T00:00:00"),
        ult_actualizacion: ISODate("2023-08-09T00:00:00")
    },
    {
        _id: 25,
        num_hc: "HC-9307-72419",
        fecha_creacion: ISODate("2022-05-20T00:00:00"),
        ult_actualizacion: ISODate("2022-07-18T00:00:00")
    },
    {
        _id: 26,
        num_hc: "HC-6440-14701",
        fecha_creacion: ISODate("2020-02-06T00:00:00"),
        ult_actualizacion: ISODate("2020-11-14T00:00:00")
    },
    {
        _id: 27,
        num_hc: "HC-6479-12152",
        fecha_creacion: ISODate("2020-09-07T00:00:00"),
        ult_actualizacion: ISODate("2020-11-07T00:00:00")
    },
    {
        _id: 28,
        num_hc: "HC-4011-95681",
        fecha_creacion: ISODate("2021-09-24T00:00:00"),
        ult_actualizacion: ISODate("2022-01-01T00:00:00")
    },
    {
        _id: 29,
        num_hc: "HC-4594-02815",
        fecha_creacion: ISODate("2021-07-29T00:00:00"),
        ult_actualizacion: ISODate("2022-02-14T00:00:00")
    },
    {
        _id: 30,
        num_hc: "HC-5360-30883",
        fecha_creacion: ISODate("2022-01-31T00:00:00"),
        ult_actualizacion: ISODate("2022-06-02T00:00:00")
    },
    {
        _id: 31,
        num_hc: "HC-0506-00616",
        fecha_creacion: ISODate("2022-08-05T00:00:00"),
        ult_actualizacion: ISODate("2022-12-27T00:00:00")
    },
    {
        _id: 32,
        num_hc: "HC-3940-67370",
        fecha_creacion: ISODate("2022-05-07T00:00:00"),
        ult_actualizacion: ISODate("2022-09-29T00:00:00")
    },
    {
        _id: 33,
        num_hc: "HC-5095-15466",
        fecha_creacion: ISODate("2021-09-16T00:00:00"),
        ult_actualizacion: ISODate("2022-08-05T00:00:00")
    },
    {
        _id: 34,
        num_hc: "HC-1685-89927",
        fecha_creacion: ISODate("2021-02-08T00:00:00"),
        ult_actualizacion: ISODate("2021-04-12T00:00:00")
    },
    {
        _id: 35,
        num_hc: "HC-6838-09362",
        fecha_creacion: ISODate("2021-01-16T00:00:00"),
        ult_actualizacion: ISODate("2021-01-22T00:00:00")
    },
    {
        _id: 36,
        num_hc: "HC-1090-44848",
        fecha_creacion: ISODate("2020-07-15T00:00:00"),
        ult_actualizacion: ISODate("2021-01-22T00:00:00")
    },
    {
        _id: 37,
        num_hc: "HC-4053-63071",
        fecha_creacion: ISODate("2021-11-20T00:00:00"),
        ult_actualizacion: ISODate("2022-08-09T00:00:00")
    },
    {
        _id: 38,
        num_hc: "HC-2608-93664",
        fecha_creacion: ISODate("2020-02-09T00:00:00"),
        ult_actualizacion: ISODate("2021-02-05T00:00:00")
    },
    {
        _id: 39,
        num_hc: "HC-2213-56373",
        fecha_creacion: ISODate("2020-12-07T00:00:00"),
        ult_actualizacion: ISODate("2021-08-18T00:00:00")
    },
    {
        _id: 40,
        num_hc: "HC-8634-80006",
        fecha_creacion: ISODate("2022-04-06T00:00:00"),
        ult_actualizacion: ISODate("2022-05-31T00:00:00")
    },
    {
        _id: 41,
        num_hc: "HC-7910-64886",
        fecha_creacion: ISODate("2022-03-27T00:00:00"),
        ult_actualizacion: ISODate("2022-07-06T00:00:00")
    },
    {
        _id: 42,
        num_hc: "HC-4718-21102",
        fecha_creacion: ISODate("2021-09-22T00:00:00"),
        ult_actualizacion: ISODate("2022-05-08T00:00:00")
    },
    {
        _id: 43,
        num_hc: "HC-7351-38571",
        fecha_creacion: ISODate("2020-04-08T00:00:00"),
        ult_actualizacion: ISODate("2021-03-14T00:00:00")
    },
    {
        _id: 44,
        num_hc: "HC-6812-31582",
        fecha_creacion: ISODate("2022-08-30T00:00:00"),
        ult_actualizacion: ISODate("2022-09-25T00:00:00")
    },
    {
        _id: 45,
        num_hc: "HC-8469-83632",
        fecha_creacion: ISODate("2021-07-02T00:00:00"),
        ult_actualizacion: ISODate("2021-10-02T00:00:00")
    },
    {
        _id: 46,
        num_hc: "HC-4089-08525",
        fecha_creacion: ISODate("2020-07-14T00:00:00"),
        ult_actualizacion: ISODate("2021-03-27T00:00:00")
    },
    {
        _id: 47,
        num_hc: "HC-4752-54490",
        fecha_creacion: ISODate("2020-11-06T00:00:00"),
        ult_actualizacion: ISODate("2021-08-13T00:00:00")
    },
    {
        _id: 48,
        num_hc: "HC-9731-30417",
        fecha_creacion: ISODate("2020-11-09T00:00:00"),
        ult_actualizacion: ISODate("2021-08-11T00:00:00")
    },
    {
        _id: 49,
        num_hc: "HC-1472-35858",
        fecha_creacion: ISODate("2020-05-31T00:00:00"),
        ult_actualizacion: ISODate("2020-11-15T00:00:00")
    },
    {
        _id: 50,
        num_hc: "HC-1881-96710",
        fecha_creacion: ISODate("2021-12-04T00:00:00"),
        ult_actualizacion: ISODate("2022-09-11T00:00:00")
    },
    {
        _id: 51,
        num_hc: "HC-3967-88027",
        fecha_creacion: ISODate("2022-07-26T00:00:00"),
        ult_actualizacion: ISODate("2023-04-05T00:00:00")
    },
    {
        _id: 52,
        num_hc: "HC-2793-87456",
        fecha_creacion: ISODate("2022-07-10T00:00:00"),
        ult_actualizacion: ISODate("2022-10-20T00:00:00")
    },
    {
        _id: 53,
        num_hc: "HC-9335-74047",
        fecha_creacion: ISODate("2022-04-20T00:00:00"),
        ult_actualizacion: ISODate("2022-06-28T00:00:00")
    },
    {
        _id: 54,
        num_hc: "HC-1477-77038",
        fecha_creacion: ISODate("2021-11-17T00:00:00"),
        ult_actualizacion: ISODate("2022-04-22T00:00:00")
    },
    {
        _id: 55,
        num_hc: "HC-9564-24074",
        fecha_creacion: ISODate("2020-01-29T00:00:00"),
        ult_actualizacion: ISODate("2021-01-17T00:00:00")
    },
    {
        _id: 56,
        num_hc: "HC-9261-26821",
        fecha_creacion: ISODate("2022-05-13T00:00:00"),
        ult_actualizacion: ISODate("2023-03-08T00:00:00")
    },
    {
        _id: 57,
        num_hc: "HC-7026-81616",
        fecha_creacion: ISODate("2022-09-18T00:00:00"),
        ult_actualizacion: ISODate("2023-03-13T00:00:00")
    },
    {
        _id: 58,
        num_hc: "HC-4264-43133",
        fecha_creacion: ISODate("2020-05-21T00:00:00"),
        ult_actualizacion: ISODate("2020-11-18T00:00:00")
    },
    {
        _id: 59,
        num_hc: "HC-9739-88140",
        fecha_creacion: ISODate("2020-04-27T00:00:00"),
        ult_actualizacion: ISODate("2020-06-21T00:00:00")
    },
    {
        _id: 60,
        num_hc: "HC-6025-85259",
        fecha_creacion: ISODate("2021-04-27T00:00:00"),
        ult_actualizacion: ISODate("2022-01-22T00:00:00")
    },
    {
        _id: 61,
        num_hc: "HC-5098-67893",
        fecha_creacion: ISODate("2021-01-05T00:00:00"),
        ult_actualizacion: ISODate("2021-02-17T00:00:00")
    },
    {
        _id: 62,
        num_hc: "HC-0386-93445",
        fecha_creacion: ISODate("2021-10-06T00:00:00"),
        ult_actualizacion: ISODate("2021-10-16T00:00:00")
    },
    {
        _id: 63,
        num_hc: "HC-8575-83331",
        fecha_creacion: ISODate("2021-03-22T00:00:00"),
        ult_actualizacion: ISODate("2021-03-28T00:00:00")
    },
    {
        _id: 64,
        num_hc: "HC-8846-02058",
        fecha_creacion: ISODate("2020-04-19T00:00:00"),
        ult_actualizacion: ISODate("2020-06-17T00:00:00")
    },
    {
        _id: 65,
        num_hc: "HC-5355-25721",
        fecha_creacion: ISODate("2021-08-05T00:00:00"),
        ult_actualizacion: ISODate("2021-09-24T00:00:00")
    },
    {
        _id: 66,
        num_hc: "HC-5367-97689",
        fecha_creacion: ISODate("2022-04-21T00:00:00"),
        ult_actualizacion: ISODate("2022-11-05T00:00:00")
    },
    {
        _id: 67,
        num_hc: "HC-5068-50690",
        fecha_creacion: ISODate("2020-06-27T00:00:00"),
        ult_actualizacion: ISODate("2021-01-07T00:00:00")
    },
    {
        _id: 68,
        num_hc: "HC-7365-26138",
        fecha_creacion: ISODate("2021-09-23T00:00:00"),
        ult_actualizacion: ISODate("2021-12-26T00:00:00")
    },
    {
        _id: 69,
        num_hc: "HC-1803-39022",
        fecha_creacion: ISODate("2021-04-10T00:00:00"),
        ult_actualizacion: ISODate("2021-08-21T00:00:00")
    },
    {
        _id: 70,
        num_hc: "HC-2087-14774",
        fecha_creacion: ISODate("2021-01-20T00:00:00"),
        ult_actualizacion: ISODate("2022-01-14T00:00:00")
    },
    {
        _id: 71,
        num_hc: "HC-6793-28029",
        fecha_creacion: ISODate("2021-07-25T00:00:00"),
        ult_actualizacion: ISODate("2021-11-27T00:00:00")
    },
    {
        _id: 72,
        num_hc: "HC-6276-00177",
        fecha_creacion: ISODate("2022-09-14T00:00:00"),
        ult_actualizacion: ISODate("2023-08-31T00:00:00")
    },
    {
        _id: 73,
        num_hc: "HC-6287-08365",
        fecha_creacion: ISODate("2021-10-28T00:00:00"),
        ult_actualizacion: ISODate("2022-05-19T00:00:00")
    },
    {
        _id: 74,
        num_hc: "HC-8557-97356",
        fecha_creacion: ISODate("2020-07-29T00:00:00"),
        ult_actualizacion: ISODate("2020-12-28T00:00:00")
    },
    {
        _id: 75,
        num_hc: "HC-5649-15493",
        fecha_creacion: ISODate("2021-12-02T00:00:00"),
        ult_actualizacion: ISODate("2022-01-13T00:00:00")
    },
    {
        _id: 76,
        num_hc: "HC-5798-15506",
        fecha_creacion: ISODate("2021-12-24T00:00:00"),
        ult_actualizacion: ISODate("2022-09-28T00:00:00")
    },
    {
        _id: 77,
        num_hc: "HC-5841-76073",
        fecha_creacion: ISODate("2020-05-26T00:00:00"),
        ult_actualizacion: ISODate("2021-04-15T00:00:00")
    },
    {
        _id: 78,
        num_hc: "HC-4155-82215",
        fecha_creacion: ISODate("2021-01-04T00:00:00"),
        ult_actualizacion: ISODate("2021-03-23T00:00:00")
    },
    {
        _id: 79,
        num_hc: "HC-7477-67451",
        fecha_creacion: ISODate("2020-10-05T00:00:00"),
        ult_actualizacion: ISODate("2020-11-08T00:00:00")
    },
    {
        _id: 80,
        num_hc: "HC-4618-05694",
        fecha_creacion: ISODate("2020-05-17T00:00:00"),
        ult_actualizacion: ISODate("2021-02-09T00:00:00")
    },
    {
        _id: 81,
        num_hc: "HC-9699-91339",
        fecha_creacion: ISODate("2021-12-23T00:00:00"),
        ult_actualizacion: ISODate("2022-06-12T00:00:00")
    },
    {
        _id: 82,
        num_hc: "HC-3123-56560",
        fecha_creacion: ISODate("2021-10-27T00:00:00"),
        ult_actualizacion: ISODate("2022-04-28T00:00:00")
    },
    {
        _id: 83,
        num_hc: "HC-4678-82123",
        fecha_creacion: ISODate("2021-04-13T00:00:00"),
        ult_actualizacion: ISODate("2021-06-25T00:00:00")
    },
    {
        _id: 84,
        num_hc: "HC-6072-51126",
        fecha_creacion: ISODate("2022-08-17T00:00:00"),
        ult_actualizacion: ISODate("2023-05-12T00:00:00")
    },
    {
        _id: 85,
        num_hc: "HC-3456-25158",
        fecha_creacion: ISODate("2020-03-08T00:00:00"),
        ult_actualizacion: ISODate("2020-04-23T00:00:00")
    },
    {
        _id: 86,
        num_hc: "HC-9679-14659",
        fecha_creacion: ISODate("2020-04-29T00:00:00"),
        ult_actualizacion: ISODate("2020-09-29T00:00:00")
    },
    {
        _id: 87,
        num_hc: "HC-9878-33772",
        fecha_creacion: ISODate("2020-03-24T00:00:00"),
        ult_actualizacion: ISODate("2020-08-30T00:00:00")
    },
    {
        _id: 88,
        num_hc: "HC-9276-08912",
        fecha_creacion: ISODate("2020-09-22T00:00:00"),
        ult_actualizacion: ISODate("2020-12-10T00:00:00")
    },
    {
        _id: 89,
        num_hc: "HC-0970-10619",
        fecha_creacion: ISODate("2020-04-27T00:00:00"),
        ult_actualizacion: ISODate("2020-12-08T00:00:00")
    },
    {
        _id: 90,
        num_hc: "HC-2755-56039",
        fecha_creacion: ISODate("2020-10-19T00:00:00"),
        ult_actualizacion: ISODate("2020-11-30T00:00:00")
    },
    {
        _id: 91,
        num_hc: "HC-1871-02765",
        fecha_creacion: ISODate("2021-11-15T00:00:00"),
        ult_actualizacion: ISODate("2022-08-06T00:00:00")
    },
    {
        _id: 92,
        num_hc: "HC-5648-39449",
        fecha_creacion: ISODate("2021-10-15T00:00:00"),
        ult_actualizacion: ISODate("2022-01-10T00:00:00")
    },
    {
        _id: 93,
        num_hc: "HC-0699-93140",
        fecha_creacion: ISODate("2020-11-30T00:00:00"),
        ult_actualizacion: ISODate("2021-07-07T00:00:00")
    },
    {
        _id: 94,
        num_hc: "HC-0648-71183",
        fecha_creacion: ISODate("2021-04-18T00:00:00"),
        ult_actualizacion: ISODate("2021-06-12T00:00:00")
    },
    {
        _id: 95,
        num_hc: "HC-1931-04330",
        fecha_creacion: ISODate("2022-06-22T00:00:00"),
        ult_actualizacion: ISODate("2023-02-18T00:00:00")
    },
    {
        _id: 96,
        num_hc: "HC-1965-58238",
        fecha_creacion: ISODate("2022-03-13T00:00:00"),
        ult_actualizacion: ISODate("2022-07-17T00:00:00")
    },
    {
        _id: 97,
        num_hc: "HC-0579-15911",
        fecha_creacion: ISODate("2022-08-18T00:00:00"),
        ult_actualizacion: ISODate("2023-01-02T00:00:00")
    },
    {
        _id: 98,
        num_hc: "HC-0420-43488",
        fecha_creacion: ISODate("2022-09-10T00:00:00"),
        ult_actualizacion: ISODate("2022-10-21T00:00:00")
    },
    {
        _id: 99,
        num_hc: "HC-1688-82225",
        fecha_creacion: ISODate("2020-05-08T00:00:00"),
        ult_actualizacion: ISODate("2020-09-26T00:00:00")
    },
    {
        _id: 100,
        num_hc: "HC-8448-07315",
        fecha_creacion: ISODate("2020-08-22T00:00:00"),
        ult_actualizacion: ISODate("2020-09-25T00:00:00")
    },
    {
        _id: 101,
        num_hc: "HC-2489-65920",
        fecha_creacion: ISODate("2022-02-23T00:00:00"),
        ult_actualizacion: ISODate("2022-07-01T00:00:00")
    },
    {
        _id: 102,
        num_hc: "HC-1750-42040",
        fecha_creacion: ISODate("2022-08-12T00:00:00"),
        ult_actualizacion: ISODate("2022-08-18T00:00:00")
    },
    {
        _id: 103,
        num_hc: "HC-5222-64313",
        fecha_creacion: ISODate("2022-01-18T00:00:00"),
        ult_actualizacion: ISODate("2022-06-15T00:00:00")
    },
    {
        _id: 104,
        num_hc: "HC-2565-87600",
        fecha_creacion: ISODate("2020-04-15T00:00:00"),
        ult_actualizacion: ISODate("2021-03-16T00:00:00")
    },
    {
        _id: 105,
        num_hc: "HC-1368-07878",
        fecha_creacion: ISODate("2020-05-14T00:00:00"),
        ult_actualizacion: ISODate("2020-06-03T00:00:00")
    },
    {
        _id: 106,
        num_hc: "HC-3561-94433",
        fecha_creacion: ISODate("2021-05-30T00:00:00"),
        ult_actualizacion: ISODate("2022-02-20T00:00:00")
    },
    {
        _id: 107,
        num_hc: "HC-6103-20620",
        fecha_creacion: ISODate("2022-04-15T00:00:00"),
        ult_actualizacion: ISODate("2023-02-10T00:00:00")
    },
    {
        _id: 108,
        num_hc: "HC-7640-33892",
        fecha_creacion: ISODate("2021-01-19T00:00:00"),
        ult_actualizacion: ISODate("2021-12-26T00:00:00")
    },
    {
        _id: 109,
        num_hc: "HC-3201-55589",
        fecha_creacion: ISODate("2022-05-17T00:00:00"),
        ult_actualizacion: ISODate("2023-01-14T00:00:00")
    },
    {
        _id: 110,
        num_hc: "HC-0713-00071",
        fecha_creacion: ISODate("2022-06-08T00:00:00"),
        ult_actualizacion: ISODate("2023-01-02T00:00:00")
    },
    {
        _id: 111,
        num_hc: "HC-3105-74301",
        fecha_creacion: ISODate("2020-11-18T00:00:00"),
        ult_actualizacion: ISODate("2021-07-07T00:00:00")
    },
    {
        _id: 112,
        num_hc: "HC-0541-68261",
        fecha_creacion: ISODate("2022-07-21T00:00:00"),
        ult_actualizacion: ISODate("2023-04-11T00:00:00")
    },
    {
        _id: 113,
        num_hc: "HC-7255-45267",
        fecha_creacion: ISODate("2021-01-29T00:00:00"),
        ult_actualizacion: ISODate("2022-01-29T00:00:00")
    },
    {
        _id: 114,
        num_hc: "HC-2727-40130",
        fecha_creacion: ISODate("2022-07-24T00:00:00"),
        ult_actualizacion: ISODate("2022-07-25T00:00:00")
    },
    {
        _id: 115,
        num_hc: "HC-4445-56477",
        fecha_creacion: ISODate("2020-07-27T00:00:00"),
        ult_actualizacion: ISODate("2021-05-22T00:00:00")
    },
    {
        _id: 116,
        num_hc: "HC-5084-83565",
        fecha_creacion: ISODate("2021-02-10T00:00:00"),
        ult_actualizacion: ISODate("2021-09-10T00:00:00")
    },
    {
        _id: 117,
        num_hc: "HC-7242-64210",
        fecha_creacion: ISODate("2021-08-16T00:00:00"),
        ult_actualizacion: ISODate("2022-03-14T00:00:00")
    },
    {
        _id: 118,
        num_hc: "HC-8285-52141",
        fecha_creacion: ISODate("2021-02-01T00:00:00"),
        ult_actualizacion: ISODate("2021-05-15T00:00:00")
    },
    {
        _id: 119,
        num_hc: "HC-4020-03651",
        fecha_creacion: ISODate("2022-07-10T00:00:00"),
        ult_actualizacion: ISODate("2023-04-30T00:00:00")
    },
    {
        _id: 120,
        num_hc: "HC-1939-99568",
        fecha_creacion: ISODate("2021-03-19T00:00:00"),
        ult_actualizacion: ISODate("2022-02-16T00:00:00")
    },
    {
        _id: 121,
        num_hc: "HC-1336-07806",
        fecha_creacion: ISODate("2021-07-24T00:00:00"),
        ult_actualizacion: ISODate("2022-02-01T00:00:00")
    },
    {
        _id: 122,
        num_hc: "HC-5918-70487",
        fecha_creacion: ISODate("2021-06-30T00:00:00"),
        ult_actualizacion: ISODate("2022-05-29T00:00:00")
    },
    {
        _id: 123,
        num_hc: "HC-7298-03642",
        fecha_creacion: ISODate("2022-04-15T00:00:00"),
        ult_actualizacion: ISODate("2023-03-24T00:00:00")
    },
    {
        _id: 124,
        num_hc: "HC-7903-24062",
        fecha_creacion: ISODate("2020-06-12T00:00:00"),
        ult_actualizacion: ISODate("2021-04-05T00:00:00")
    },
    {
        _id: 125,
        num_hc: "HC-4760-66138",
        fecha_creacion: ISODate("2022-06-30T00:00:00"),
        ult_actualizacion: ISODate("2022-10-04T00:00:00")
    },
    {
        _id: 126,
        num_hc: "HC-4225-70453",
        fecha_creacion: ISODate("2020-12-29T00:00:00"),
        ult_actualizacion: ISODate("2021-03-19T00:00:00")
    },
    {
        _id: 127,
        num_hc: "HC-1120-45970",
        fecha_creacion: ISODate("2020-04-27T00:00:00"),
        ult_actualizacion: ISODate("2020-09-18T00:00:00")
    }
]);

//inserciones pacientes

db.pacientes.insertMany([
    {
        _id: 1,
        id_hist_clinica: 1,
        primer_nombre: "Alejandro",
        segundo_nombre: "Amilcar",
        primer_apellido: "Vara",
        segundo_apellido: "Arroyo",
        id_direccion: 57,
        tel: "3415786640",
        correo_el: "alejandro.vara.1@correo.com"
    },
    {
        _id: 2,
        id_hist_clinica: 2,
        primer_nombre: "Marc",
        primer_apellido: "Quintana",
        segundo_apellido: "Zapata",
        id_direccion: 42,
        tel: "3168628597",
        correo_el: "marc.quintana.2@correo.com"
    },
    {
        _id: 3,
        id_hist_clinica: 3,
        primer_nombre: "Jose",
        segundo_nombre: "Jennifer",
        primer_apellido: "Melendez",
        segundo_apellido: "Pareja",
        id_direccion: 112,
        tel: "3565217828",
        correo_el: "jose.melendez.3@correo.com"
    },
    {
        _id: 4,
        id_hist_clinica: 4,
        primer_nombre: "Nestor",
        segundo_nombre: "Jose",
        primer_apellido: "Valdes",
        segundo_apellido: "Garzon",
        id_direccion: 95,
        tel: "3888161608",
        correo_el: "nestor.valdes.4@correo.com"
    },
    {
        _id: 5,
        id_hist_clinica: 5,
        primer_nombre: "Epifanio",
        segundo_nombre: "Judith",
        primer_apellido: "Lillo",
        segundo_apellido: "Tellez",
        id_direccion: 91,
        tel: "3531683630",
        correo_el: "epifanio.lillo.5@correo.com"
    },
    {
        _id: 6,
        id_hist_clinica: 6,
        primer_nombre: "Esteban",
        segundo_nombre: "Renato",
        primer_apellido: "Pozuelo",
        segundo_apellido: "Angulo",
        id_direccion: 3,
        tel: "3151881037",
        correo_el: "esteban.pozuelo.6@correo.com"
    },
    {
        _id: 7,
        id_hist_clinica: 7,
        primer_nombre: "Paco",
        primer_apellido: "Pallares",
        segundo_apellido: "Jurado",
        id_direccion: 106,
        tel: "3586162477",
        correo_el: "paco.pallares.7@correo.com"
    },
    {
        _id: 8,
        id_hist_clinica: 8,
        primer_nombre: "Cayetana",
        primer_apellido: "Reina",
        segundo_apellido: "Torrijos",
        id_direccion: 102,
        tel: "3796804475",
        correo_el: "cayetana.reina.8@correo.com"
    },
    {
        _id: 9,
        id_hist_clinica: 9,
        primer_nombre: "Roldan",
        primer_apellido: "Abellan",
        segundo_apellido: "Segarra",
        id_direccion: 86,
        tel: "3921099888",
        correo_el: "roldan.abellan.9@correo.com"
    },
    {
        _id: 10,
        id_hist_clinica: 10,
        primer_nombre: "Claudio",
        segundo_nombre: "Feliciano",
        primer_apellido: "Bautista",
        segundo_apellido: "Torre",
        id_direccion: 35,
        tel: "3215290042",
        correo_el: "claudio.bautista.10@correo.com"
    },
    {
        _id: 11,
        id_hist_clinica: 11,
        primer_nombre: "Eric",
        primer_apellido: "Daza",
        segundo_apellido: "Casanovas",
        id_direccion: 21,
        tel: "3145186543",
        correo_el: "eric.daza.11@correo.com"
    },
    {
        _id: 12,
        id_hist_clinica: 12,
        primer_nombre: "Curro",
        primer_apellido: "Ferrero",
        segundo_apellido: "Cozar",
        id_direccion: 63,
        tel: "3432595564",
        correo_el: "curro.ferrero.12@correo.com"
    },
    {
        _id: 13,
        id_hist_clinica: 13,
        primer_nombre: "Rosaura",
        primer_apellido: "Farre",
        segundo_apellido: "Dominguez",
        id_direccion: 49,
        tel: "3253510082",
        correo_el: "rosaura.farre.13@correo.com"
    },
    {
        _id: 14,
        id_hist_clinica: 14,
        primer_nombre: "Cruz",
        primer_apellido: "Yuste",
        segundo_apellido: "Bonet",
        id_direccion: 79,
        tel: "3457278595",
        correo_el: "cruz.yuste.14@correo.com"
    },
    {
        _id: 15,
        id_hist_clinica: 15,
        primer_nombre: "Nestor",
        segundo_nombre: "Zacarias",
        primer_apellido: "Miralles",
        segundo_apellido: "Rodriguez",
        id_direccion: 99,
        tel: "3447059447",
        correo_el: "nestor.miralles.15@correo.com"
    },
    {
        _id: 16,
        id_hist_clinica: 16,
        primer_nombre: "Ildefonso",
        segundo_nombre: "Fortunata",
        primer_apellido: "Beltran",
        segundo_apellido: "Sancho",
        id_direccion: 96,
        tel: "3894320013",
        correo_el: "ildefonso.beltran.16@correo.com"
    },
    {
        _id: 17,
        id_hist_clinica: 17,
        primer_nombre: "Alicia",
        segundo_nombre: "Noa",
        primer_apellido: "Nevado",
        segundo_apellido: "Valencia",
        id_direccion: 38,
        tel: "3975544475",
        correo_el: "alicia.nevado.17@correo.com"
    },
    {
        _id: 18,
        id_hist_clinica: 18,
        primer_nombre: "Fidel",
        primer_apellido: "Egea",
        segundo_apellido: "Borrell",
        id_direccion: 93,
        tel: "3619812374",
        correo_el: "fidel.egea.18@correo.com"
    },
    {
        _id: 19,
        id_hist_clinica: 19,
        primer_nombre: "Marianela",
        segundo_nombre: "Chucho",
        primer_apellido: "Arnaiz",
        segundo_apellido: "Colom",
        id_direccion: 58,
        tel: "3515817838",
        correo_el: "marianela.arnaiz.19@correo.com"
    },
    {
        _id: 20,
        id_hist_clinica: 20,
        primer_nombre: "Emilia",
        segundo_nombre: "Edgar",
        primer_apellido: "Suarez",
        segundo_apellido: "Ibanez",
        id_direccion: 73,
        tel: "3338463529",
        correo_el: "emilia.suarez.20@correo.com"
    },
    {
        _id: 21,
        id_hist_clinica: 21,
        primer_nombre: "Maximiliano",
        segundo_nombre: "Jenaro",
        primer_apellido: "Azcona",
        segundo_apellido: "Prada",
        id_direccion: 43,
        tel: "3402362272",
        correo_el: "maximiliano.azcona.21@correo.com"
    },
    {
        _id: 22,
        id_hist_clinica: 22,
        primer_nombre: "Emilio",
        segundo_nombre: "Anselma",
        primer_apellido: "Hervia",
        segundo_apellido: "Pineda",
        id_direccion: 22,
        tel: "3266069530",
        correo_el: "emilio.hervia.22@correo.com"
    },
    {
        _id: 23,
        id_hist_clinica: 23,
        primer_nombre: "Perlita",
        primer_apellido: "Nebot",
        segundo_apellido: "Cadenas",
        id_direccion: 31,
        tel: "3484351903",
        correo_el: "perlita.nebot.23@correo.com"
    },
    {
        _id: 24,
        id_hist_clinica: 24,
        primer_nombre: "Carmela",
        primer_apellido: "Naranjo",
        segundo_apellido: "Tellez",
        id_direccion: 75,
        tel: "3880032276",
        correo_el: "carmela.naranjo.24@correo.com"
    },
    {
        _id: 25,
        id_hist_clinica: 25,
        primer_nombre: "Jose",
        segundo_nombre: "Moises",
        primer_apellido: "Penalver",
        segundo_apellido: "Dominguez",
        id_direccion: 39,
        tel: "3998262916",
        correo_el: "jose.penalver.25@correo.com"
    },
    {
        _id: 26,
        id_hist_clinica: 26,
        primer_nombre: "Leandra",
        segundo_nombre: "Candido",
        primer_apellido: "Quero",
        segundo_apellido: "Hoz",
        id_direccion: 51,
        tel: "3451104651",
        correo_el: "leandra.quero.26@correo.com"
    },
    {
        _id: 27,
        id_hist_clinica: 27,
        primer_nombre: "Jose",
        segundo_nombre: "Marino",
        primer_apellido: "Baro",
        segundo_apellido: "Alcalde",
        id_direccion: 102,
        tel: "3619275304",
        correo_el: "jose.baro.27@correo.com"
    },
    {
        _id: 28,
        id_hist_clinica: 28,
        primer_nombre: "Herminio",
        segundo_nombre: "Almudena",
        primer_apellido: "Alvarado",
        segundo_apellido: "Alegre",
        id_direccion: 111,
        tel: "3959944224",
        correo_el: "herminio.alvarado.28@correo.com"
    },
    {
        _id: 29,
        id_hist_clinica: 29,
        primer_nombre: "Gaston",
        primer_apellido: "Diaz",
        segundo_apellido: "Cano",
        id_direccion: 59,
        tel: "3493168997",
        correo_el: "gaston.diaz.29@correo.com"
    },
    {
        _id: 30,
        id_hist_clinica: 30,
        primer_nombre: "Adelina",
        primer_apellido: "Marti",
        segundo_apellido: "Mosquera",
        id_direccion: 18,
        tel: "3793339771",
        correo_el: "adelina.marti.30@correo.com"
    },
    {
        _id: 31,
        id_hist_clinica: 31,
        primer_nombre: "Mariano",
        segundo_nombre: "Jesus",
        primer_apellido: "Iniguez",
        segundo_apellido: "Catala",
        id_direccion: 92,
        tel: "3270984024",
        correo_el: "mariano.iniguez.31@correo.com"
    },
    {
        _id: 32,
        id_hist_clinica: 32,
        primer_nombre: "Isa",
        segundo_nombre: "Eli",
        primer_apellido: "Roldan",
        segundo_apellido: "Jaen",
        id_direccion: 45,
        tel: "3551984165",
        correo_el: "isa.roldan.32@correo.com"
    },
    {
        _id: 33,
        id_hist_clinica: 33,
        primer_nombre: "Albert",
        segundo_nombre: "Teresita",
        primer_apellido: "Leon",
        segundo_apellido: "Miranda",
        id_direccion: 23,
        tel: "3729629217",
        correo_el: "albert.leon.33@correo.com"
    },
    {
        _id: 34,
        id_hist_clinica: 34,
        primer_nombre: "Yolanda",
        segundo_nombre: "Bartolome",
        primer_apellido: "Alamo",
        segundo_apellido: "Alba",
        id_direccion: 113,
        tel: "3856392041",
        correo_el: "yolanda.alamo.34@correo.com"
    },
    {
        _id: 35,
        id_hist_clinica: 35,
        primer_nombre: "Eusebio",
        primer_apellido: "Herrera",
        segundo_apellido: "Guillen",
        id_direccion: 90,
        tel: "3267272685",
        correo_el: "eusebio.herrera.35@correo.com"
    },
    {
        _id: 36,
        id_hist_clinica: 36,
        primer_nombre: "Lucas",
        primer_apellido: "Casanovas",
        segundo_apellido: "Lara",
        id_direccion: 6,
        tel: "3408717683",
        correo_el: "lucas.casanovas.36@correo.com"
    },
    {
        _id: 37,
        id_hist_clinica: 37,
        primer_nombre: "Fabian",
        segundo_nombre: "Abel",
        primer_apellido: "Riba",
        segundo_apellido: "Costa",
        id_direccion: 24,
        tel: "3876437379",
        correo_el: "fabian.riba.37@correo.com"
    },
    {
        _id: 38,
        id_hist_clinica: 38,
        primer_nombre: "Maximo",
        primer_apellido: "Mascaro",
        segundo_apellido: "Sarmiento",
        id_direccion: 3,
        tel: "3872908206",
        correo_el: "maximo.mascaro.38@correo.com"
    },
    {
        _id: 39,
        id_hist_clinica: 39,
        primer_nombre: "Agustina",
        segundo_nombre: "Pacifica",
        primer_apellido: "Larranaga",
        segundo_apellido: "Berrocal",
        id_direccion: 68,
        tel: "3802405567",
        correo_el: "agustina.larranaga.39@correo.com"
    },
    {
        _id: 40,
        id_hist_clinica: 40,
        primer_nombre: "Amancio",
        primer_apellido: "Aviles",
        segundo_apellido: "Flores",
        id_direccion: 53,
        tel: "3245241186",
        correo_el: "amancio.aviles.40@correo.com"
    },
    {
        _id: 41,
        id_hist_clinica: 41,
        primer_nombre: "Rodrigo",
        segundo_nombre: "Agapito",
        primer_apellido: "Vaquero",
        segundo_apellido: "Jaen",
        id_direccion: 90,
        tel: "3590037419",
        correo_el: "rodrigo.vaquero.41@correo.com"
    },
    {
        _id: 42,
        id_hist_clinica: 42,
        primer_nombre: "Adelardo",
        segundo_nombre: "Nayara",
        primer_apellido: "Prado",
        segundo_apellido: "Salmeron",
        id_direccion: 60,
        tel: "3143247262",
        correo_el: "adelardo.prado.42@correo.com"
    },
    {
        _id: 43,
        id_hist_clinica: 43,
        primer_nombre: "Ismael",
        segundo_nombre: "Estela",
        primer_apellido: "Vigil",
        segundo_apellido: "Alsina",
        id_direccion: 103,
        tel: "3419129577",
        correo_el: "ismael.vigil.43@correo.com"
    },
    {
        _id: 44,
        id_hist_clinica: 44,
        primer_nombre: "Remigio",
        primer_apellido: "Millan",
        segundo_apellido: "Montana",
        id_direccion: 18,
        tel: "3813211308",
        correo_el: "remigio.millan.44@correo.com"
    },
    {
        _id: 45,
        id_hist_clinica: 45,
        primer_nombre: "Consuela",
        segundo_nombre: "Adelina",
        primer_apellido: "Collado",
        segundo_apellido: "Rosello",
        id_direccion: 77,
        tel: "3116615365",
        correo_el: "consuela.collado.45@correo.com"
    },
    {
        _id: 46,
        id_hist_clinica: 46,
        primer_nombre: "Leandro",
        segundo_nombre: "Martina",
        primer_apellido: "Mulet",
        segundo_apellido: "Tovar",
        id_direccion: 71,
        tel: "3297587403",
        correo_el: "leandro.mulet.46@correo.com"
    },
    {
        _id: 47,
        id_hist_clinica: 47,
        primer_nombre: "Aurelia",
        primer_apellido: "Calderon",
        segundo_apellido: "Arana",
        id_direccion: 27,
        tel: "3228042751",
        correo_el: "aurelia.calderon.47@correo.com"
    },
    {
        _id: 48,
        id_hist_clinica: 48,
        primer_nombre: "Sonia",
        primer_apellido: "Diego",
        segundo_apellido: "Garay",
        id_direccion: 100,
        tel: "3742497899",
        correo_el: "sonia.diego.48@correo.com"
    },
    {
        _id: 49,
        id_hist_clinica: 49,
        primer_nombre: "Alba",
        segundo_nombre: "Lucia",
        primer_apellido: "Carbo",
        segundo_apellido: "Fonseca",
        id_direccion: 47,
        tel: "3532489114",
        correo_el: "alba.carbo.49@correo.com"
    },
    {
        _id: 50,
        id_hist_clinica: 50,
        primer_nombre: "Eva",
        primer_apellido: "Aguila",
        segundo_apellido: "Solis",
        id_direccion: 85,
        tel: "3680440094",
        correo_el: "eva.aguila.50@correo.com"
    },
    {
        _id: 51,
        id_hist_clinica: 51,
        primer_nombre: "Javier",
        primer_apellido: "Vall",
        segundo_apellido: "Carreras",
        id_direccion: 100,
        tel: "3606686496",
        correo_el: "javier.vall.51@correo.com"
    },
    {
        _id: 52,
        id_hist_clinica: 52,
        primer_nombre: "Jose",
        primer_apellido: "Nebot",
        segundo_apellido: "Rodriguez",
        id_direccion: 83,
        tel: "3410356379",
        correo_el: "jose.nebot.52@correo.com"
    },
    {
        _id: 53,
        id_hist_clinica: 53,
        primer_nombre: "Ciriaco",
        primer_apellido: "Navarro",
        segundo_apellido: "Espinosa",
        id_direccion: 20,
        tel: "3958101898",
        correo_el: "ciriaco.navarro.53@correo.com"
    },
    {
        _id: 54,
        id_hist_clinica: 54,
        primer_nombre: "Cristian",
        segundo_nombre: "Gema",
        primer_apellido: "Amat",
        segundo_apellido: "Canete",
        id_direccion: 34,
        tel: "3833088893",
        correo_el: "cristian.amat.54@correo.com"
    },
    {
        _id: 55,
        id_hist_clinica: 55,
        primer_nombre: "Fernanda",
        segundo_nombre: "Saturnino",
        primer_apellido: "Pol",
        segundo_apellido: "Amor",
        id_direccion: 112,
        tel: "3368292224",
        correo_el: "fernanda.pol.55@correo.com"
    },
    {
        _id: 56,
        id_hist_clinica: 56,
        primer_nombre: "Cayetano",
        segundo_nombre: "Octavia",
        primer_apellido: "Molina",
        segundo_apellido: "Mendizabal",
        id_direccion: 50,
        tel: "3329678709",
        correo_el: "cayetano.molina.56@correo.com"
    },
    {
        _id: 57,
        id_hist_clinica: 57,
        primer_nombre: "Roman",
        primer_apellido: "Segura",
        segundo_apellido: "Piquer",
        id_direccion: 76,
        tel: "3409016276",
        correo_el: "roman.segura.57@correo.com"
    },
    {
        _id: 58,
        id_hist_clinica: 58,
        primer_nombre: "Nicolasa",
        primer_apellido: "Gilabert",
        segundo_apellido: "Pena",
        id_direccion: 37,
        tel: "3531213466",
        correo_el: "nicolasa.gilabert.58@correo.com"
    },
    {
        _id: 59,
        id_hist_clinica: 59,
        primer_nombre: "Emilio",
        primer_apellido: "Valbuena",
        segundo_apellido: "Cepeda",
        id_direccion: 96,
        tel: "3435292834",
        correo_el: "emilio.valbuena.59@correo.com"
    },
    {
        _id: 60,
        id_hist_clinica: 60,
        primer_nombre: "Modesto",
        primer_apellido: "Salamanca",
        segundo_apellido: "Pena",
        id_direccion: 69,
        tel: "3947715988",
        correo_el: "modesto.salamanca.60@correo.com"
    },
    {
        _id: 61,
        id_hist_clinica: 61,
        primer_nombre: "Veronica",
        segundo_nombre: "Jesus",
        primer_apellido: "Dominguez",
        segundo_apellido: "Dominguez",
        id_direccion: 42,
        tel: "3312355091",
        correo_el: "veronica.dominguez.61@correo.com"
    },
    {
        _id: 62,
        id_hist_clinica: 62,
        primer_nombre: "Cruz",
        primer_apellido: "Mercader",
        segundo_apellido: "Criado",
        id_direccion: 75,
        tel: "3164678659",
        correo_el: "cruz.mercader.62@correo.com"
    },
    {
        _id: 63,
        id_hist_clinica: 63,
        primer_nombre: "Luis",
        primer_apellido: "Zapata",
        segundo_apellido: "Vera",
        id_direccion: 110,
        tel: "3768891107",
        correo_el: "luis.zapata.63@correo.com"
    },
    {
        _id: 64,
        id_hist_clinica: 64,
        primer_nombre: "Juana",
        primer_apellido: "Castello",
        segundo_apellido: "Baena",
        id_direccion: 98,
        tel: "3929296007",
        correo_el: "juana.castello.64@correo.com"
    },
    {
        _id: 65,
        id_hist_clinica: 65,
        primer_nombre: "Reina",
        primer_apellido: "Santamaria",
        segundo_apellido: "Rivero",
        id_direccion: 68,
        tel: "3103187759",
        correo_el: "reina.santamaria.65@correo.com"
    },
    {
        _id: 66,
        id_hist_clinica: 66,
        primer_nombre: "Blanca",
        primer_apellido: "Amo",
        segundo_apellido: "Albero",
        id_direccion: 28,
        tel: "3680965638",
        correo_el: "blanca.amo.66@correo.com"
    },
    {
        _id: 67,
        id_hist_clinica: 67,
        primer_nombre: "Josefa",
        primer_apellido: "Barrena",
        segundo_apellido: "Ojeda",
        id_direccion: 2,
        tel: "3508131977",
        correo_el: "josefa.barrena.67@correo.com"
    },
    {
        _id: 68,
        id_hist_clinica: 68,
        primer_nombre: "Cornelio",
        primer_apellido: "Barros",
        segundo_apellido: "Santiago",
        id_direccion: 70,
        tel: "3348620246",
        correo_el: "cornelio.barros.68@correo.com"
    },
    {
        _id: 69,
        id_hist_clinica: 69,
        primer_nombre: "Marisa",
        segundo_nombre: "Marisela",
        primer_apellido: "Santamaria",
        segundo_apellido: "Clemente",
        id_direccion: 48,
        tel: "3348909656",
        correo_el: "marisa.santamaria.69@correo.com"
    },
    {
        _id: 70,
        id_hist_clinica: 70,
        primer_nombre: "Toribio",
        primer_apellido: "Bertran",
        segundo_apellido: "Campoy",
        id_direccion: 44,
        tel: "3496070022",
        correo_el: "toribio.bertran.70@correo.com"
    },
    {
        _id: 71,
        id_hist_clinica: 71,
        primer_nombre: "Mariana",
        segundo_nombre: "Monica",
        primer_apellido: "Aviles",
        segundo_apellido: "Palmer",
        id_direccion: 62,
        tel: "3739831189",
        correo_el: "mariana.aviles.71@correo.com"
    },
    {
        _id: 72,
        id_hist_clinica: 72,
        primer_nombre: "Virginia",
        segundo_nombre: "Dimas",
        primer_apellido: "Galan",
        segundo_apellido: "Rodriguez",
        id_direccion: 64,
        tel: "3345792602",
        correo_el: "virginia.galan.72@correo.com"
    },
    {
        _id: 73,
        id_hist_clinica: 73,
        primer_nombre: "Caridad",
        segundo_nombre: "Joan",
        primer_apellido: "Ayllon",
        segundo_apellido: "Gimenez",
        id_direccion: 11,
        tel: "3834857306",
        correo_el: "caridad.ayllon.73@correo.com"
    },
    {
        _id: 74,
        id_hist_clinica: 74,
        primer_nombre: "Luisina",
        segundo_nombre: "Brunilda",
        primer_apellido: "Muniz",
        segundo_apellido: "Bayon",
        id_direccion: 114,
        tel: "3255024317",
        correo_el: "luisina.muniz.74@correo.com"
    },
    {
        _id: 75,
        id_hist_clinica: 75,
        primer_nombre: "Alex",
        segundo_nombre: "Roxana",
        primer_apellido: "Sans",
        segundo_apellido: "Gimenez",
        id_direccion: 40,
        tel: "3587534247",
        correo_el: "alex.sans.75@correo.com"
    },
    {
        _id: 76,
        id_hist_clinica: 76,
        primer_nombre: "Florencio",
        segundo_nombre: "Tamara",
        primer_apellido: "Perez",
        segundo_apellido: "Villaverde",
        id_direccion: 80,
        tel: "3609926347",
        correo_el: "florencio.perez.76@correo.com"
    },
    {
        _id: 77,
        id_hist_clinica: 77,
        primer_nombre: "Anacleto",
        primer_apellido: "Gallo",
        segundo_apellido: "Peinado",
        id_direccion: 93,
        tel: "3818941955",
        correo_el: "anacleto.gallo.77@correo.com"
    },
    {
        _id: 78,
        id_hist_clinica: 78,
        primer_nombre: "Reina",
        segundo_nombre: "Isaac",
        primer_apellido: "Revilla",
        segundo_apellido: "Vara",
        id_direccion: 92,
        tel: "3914977245",
        correo_el: "reina.revilla.78@correo.com"
    },
    {
        _id: 79,
        id_hist_clinica: 79,
        primer_nombre: "Eulalia",
        segundo_nombre: "Curro",
        primer_apellido: "Robles",
        segundo_apellido: "Urrutia",
        id_direccion: 13,
        tel: "3206310396",
        correo_el: "eulalia.robles.79@correo.com"
    },
    {
        _id: 80,
        id_hist_clinica: 80,
        primer_nombre: "Sol",
        segundo_nombre: "Remigio",
        primer_apellido: "Isern",
        segundo_apellido: "Sarmiento",
        id_direccion: 95,
        tel: "3985307057",
        correo_el: "sol.isern.80@correo.com"
    },
    {
        _id: 81,
        id_hist_clinica: 81,
        primer_nombre: "Pascuala",
        primer_apellido: "Tello",
        segundo_apellido: "Paez",
        id_direccion: 108,
        tel: "3255899551",
        correo_el: "pascuala.tello.81@correo.com"
    },
    {
        _id: 82,
        id_hist_clinica: 82,
        primer_nombre: "Constanza",
        segundo_nombre: "Che",
        primer_apellido: "Pons",
        segundo_apellido: "Sanjuan",
        id_direccion: 64,
        tel: "3130862294",
        correo_el: "constanza.pons.82@correo.com"
    },
    {
        _id: 83,
        id_hist_clinica: 83,
        primer_nombre: "Modesta",
        primer_apellido: "Puente",
        segundo_apellido: "Lastra",
        id_direccion: 61,
        tel: "3282521162",
        correo_el: "modesta.puente.83@correo.com"
    },
    {
        _id: 84,
        id_hist_clinica: 84,
        primer_nombre: "Evaristo",
        segundo_nombre: "Jacobo",
        primer_apellido: "Villar",
        segundo_apellido: "Mora",
        id_direccion: 19,
        tel: "3837209970",
        correo_el: "evaristo.villar.84@correo.com"
    },
    {
        _id: 85,
        id_hist_clinica: 85,
        primer_nombre: "Maximo",
        primer_apellido: "Garmendia",
        segundo_apellido: "Carvajal",
        id_direccion: 77,
        tel: "3730894331",
        correo_el: "maximo.garmendia.85@correo.com"
    },
    {
        _id: 86,
        id_hist_clinica: 86,
        primer_nombre: "Jose",
        primer_apellido: "Camps",
        segundo_apellido: "Berrocal",
        id_direccion: 2,
        tel: "3764181174",
        correo_el: "jose.camps.86@correo.com"
    },
    {
        _id: 87,
        id_hist_clinica: 87,
        primer_nombre: "Melania",
        segundo_nombre: "Inmaculada",
        primer_apellido: "Pera",
        segundo_apellido: "Reig",
        id_direccion: 88,
        tel: "3159564427",
        correo_el: "melania.pera.87@correo.com"
    },
    {
        _id: 88,
        id_hist_clinica: 88,
        primer_nombre: "Encarnita",
        segundo_nombre: "Paco",
        primer_apellido: "Molina",
        segundo_apellido: "Amigo",
        id_direccion: 6,
        tel: "3162869116",
        correo_el: "encarnita.molina.88@correo.com"
    },
    {
        _id: 89,
        id_hist_clinica: 89,
        primer_nombre: "Leandro",
        segundo_nombre: "Zacarias",
        primer_apellido: "Lujan",
        segundo_apellido: "Palacio",
        id_direccion: 55,
        tel: "3278643003",
        correo_el: "leandro.lujan.89@correo.com"
    },
    {
        _id: 90,
        id_hist_clinica: 90,
        primer_nombre: "Epifanio",
        segundo_nombre: "Haydee",
        primer_apellido: "Anaya",
        segundo_apellido: "Reyes",
        id_direccion: 109,
        tel: "3510984848",
        correo_el: "epifanio.anaya.90@correo.com"
    },
    {
        _id: 91,
        id_hist_clinica: 91,
        primer_nombre: "Candela",
        segundo_nombre: "Natividad",
        primer_apellido: "Mendez",
        segundo_apellido: "Bilbao",
        id_direccion: 25,
        tel: "3858411077",
        correo_el: "candela.mendez.91@correo.com"
    },
    {
        _id: 92,
        id_hist_clinica: 92,
        primer_nombre: "Rufina",
        primer_apellido: "Pinedo",
        segundo_apellido: "Luis",
        id_direccion: 57,
        tel: "3368659899",
        correo_el: "rufina.pinedo.92@correo.com"
    },
    {
        _id: 93,
        id_hist_clinica: 93,
        primer_nombre: "Rosalia",
        primer_apellido: "Alcantara",
        segundo_apellido: "Priego",
        id_direccion: 40,
        tel: "3384399873",
        correo_el: "rosalia.alcantara.93@correo.com"
    },
    {
        _id: 94,
        id_hist_clinica: 94,
        primer_nombre: "Ale",
        segundo_nombre: "Yessica",
        primer_apellido: "Penalver",
        segundo_apellido: "Heras",
        id_direccion: 28,
        tel: "3334087175",
        correo_el: "ale.penalver.94@correo.com"
    },
    {
        _id: 95,
        id_hist_clinica: 95,
        primer_nombre: "Aaron",
        primer_apellido: "Vidal",
        segundo_apellido: "Vega",
        id_direccion: 84,
        tel: "3407136853",
        correo_el: "aaron.vidal.95@correo.com"
    },
    {
        _id: 96,
        id_hist_clinica: 96,
        primer_nombre: "Ana",
        primer_apellido: "Estevez",
        segundo_apellido: "Arjona",
        id_direccion: 105,
        tel: "3843414073",
        correo_el: "ana.estevez.96@correo.com"
    },
    {
        _id: 97,
        id_hist_clinica: 97,
        primer_nombre: "Jeremias",
        segundo_nombre: "Isidoro",
        primer_apellido: "Mariscal",
        segundo_apellido: "Saldana",
        id_direccion: 1,
        tel: "3329199330",
        correo_el: "jeremias.mariscal.97@correo.com"
    },
    {
        _id: 98,
        id_hist_clinica: 98,
        primer_nombre: "Aura",
        segundo_nombre: "Almudena",
        primer_apellido: "Parra",
        segundo_apellido: "Lamas",
        id_direccion: 43,
        tel: "3246210082",
        correo_el: "aura.parra.98@correo.com"
    },
    {
        _id: 99,
        id_hist_clinica: 99,
        primer_nombre: "Julieta",
        segundo_nombre: "Maxi",
        primer_apellido: "Rosales",
        segundo_apellido: "Jodar",
        id_direccion: 70,
        tel: "3543716651",
        correo_el: "julieta.rosales.99@correo.com"
    },
    {
        _id: 100,
        id_hist_clinica: 100,
        primer_nombre: "Feliciana",
        segundo_nombre: "Leonardo",
        primer_apellido: "Cifuentes",
        segundo_apellido: "Marcos",
        id_direccion: 107,
        tel: "3968287653",
        correo_el: "feliciana.cifuentes.100@correo.com"
    },
    {
        _id: 101,
        id_hist_clinica: 101,
        primer_nombre: "Eleuterio",
        primer_apellido: "Pi",
        segundo_apellido: "Roman",
        id_direccion: 109,
        tel: "3954028170",
        correo_el: "eleuterio.pi.101@correo.com"
    },
    {
        _id: 102,
        id_hist_clinica: 102,
        primer_nombre: "Curro",
        segundo_nombre: "Reyes",
        primer_apellido: "Crespi",
        segundo_apellido: "Hernandez",
        id_direccion: 72,
        tel: "3391777731",
        correo_el: "curro.crespi.102@correo.com"
    },
    {
        _id: 103,
        id_hist_clinica: 103,
        primer_nombre: "Liliana",
        primer_apellido: "Recio",
        segundo_apellido: "Checa",
        id_direccion: 41,
        tel: "3228771286",
        correo_el: "liliana.recio.103@correo.com"
    },
    {
        _id: 104,
        id_hist_clinica: 104,
        primer_nombre: "Amanda",
        segundo_nombre: "Omar",
        primer_apellido: "Heredia",
        segundo_apellido: "Noriega",
        id_direccion: 54,
        tel: "3420767955",
        correo_el: "amanda.heredia.104@correo.com"
    },
    {
        _id: 105,
        id_hist_clinica: 105,
        primer_nombre: "Perlita",
        primer_apellido: "Gordillo",
        segundo_apellido: "Amor",
        id_direccion: 49,
        tel: "3698928104",
        correo_el: "perlita.gordillo.105@correo.com"
    },
    {
        _id: 106,
        id_hist_clinica: 106,
        primer_nombre: "Fito",
        primer_apellido: "Alvaro",
        segundo_apellido: "Aragon",
        id_direccion: 115,
        tel: "3479186752",
        correo_el: "fito.alvaro.106@correo.com"
    },
    {
        _id: 107,
        id_hist_clinica: 107,
        primer_nombre: "Mireia",
        segundo_nombre: "Rocio",
        primer_apellido: "Galiano",
        segundo_apellido: "Sierra",
        id_direccion: 17,
        tel: "3513041423",
        correo_el: "mireia.galiano.107@correo.com"
    },
    {
        _id: 108,
        id_hist_clinica: 108,
        primer_nombre: "Amancio",
        segundo_nombre: "Alejandra",
        primer_apellido: "Villalobos",
        segundo_apellido: "Boix",
        id_direccion: 7,
        tel: "3160000039",
        correo_el: "amancio.villalobos.108@correo.com"
    },
    {
        _id: 109,
        id_hist_clinica: 109,
        primer_nombre: "Juan",
        primer_apellido: "Pla",
        segundo_apellido: "Cobos",
        id_direccion: 58,
        tel: "3781927278",
        correo_el: "juan.pla.109@correo.com"
    },
    {
        _id: 110,
        id_hist_clinica: 110,
        primer_nombre: "Herminio",
        segundo_nombre: "Florina",
        primer_apellido: "Ruiz",
        segundo_apellido: "Leal",
        id_direccion: 78,
        tel: "3414542014",
        correo_el: "herminio.ruiz.110@correo.com"
    },
    {
        _id: 111,
        id_hist_clinica: 111,
        primer_nombre: "Cristina",
        segundo_nombre: "Goyo",
        primer_apellido: "Arco",
        segundo_apellido: "Tello",
        id_direccion: 13,
        tel: "3471664106",
        correo_el: "cristina.arco.111@correo.com"
    },
    {
        _id: 112,
        id_hist_clinica: 112,
        primer_nombre: "Andres",
        primer_apellido: "Alcantara",
        segundo_apellido: "Camara",
        id_direccion: 16,
        tel: "3888037641",
        correo_el: "andres.alcantara.112@correo.com"
    },
    {
        _id: 113,
        id_hist_clinica: 113,
        primer_nombre: "Renato",
        primer_apellido: "Amat",
        segundo_apellido: "Cueto",
        id_direccion: 38,
        tel: "3779660141",
        correo_el: "renato.amat.113@correo.com"
    },
    {
        _id: 114,
        id_hist_clinica: 114,
        primer_nombre: "Vito",
        primer_apellido: "Gil",
        segundo_apellido: "Moya",
        id_direccion: 74,
        tel: "3719139985",
        correo_el: "vito.gil.114@correo.com"
    },
    {
        _id: 115,
        id_hist_clinica: 115,
        primer_nombre: "Jesus",
        segundo_nombre: "Hermenegildo",
        primer_apellido: "Feliu",
        segundo_apellido: "Escalona",
        id_direccion: 79,
        tel: "3721595803",
        correo_el: "jesus.feliu.115@correo.com"
    },
    {
        _id: 116,
        id_hist_clinica: 116,
        primer_nombre: "Maria",
        segundo_nombre: "Alondra",
        primer_apellido: "Donaire",
        segundo_apellido: "Canet",
        id_direccion: 33,
        tel: "3795260936",
        correo_el: "maria.donaire.116@correo.com"
    },
    {
        _id: 117,
        id_hist_clinica: 117,
        primer_nombre: "Soledad",
        segundo_nombre: "Aitana",
        primer_apellido: "Carbonell",
        segundo_apellido: "Navas",
        id_direccion: 60,
        tel: "3442019413",
        correo_el: "soledad.carbonell.117@correo.com"
    },
    {
        _id: 118,
        id_hist_clinica: 118,
        primer_nombre: "Pastor",
        segundo_nombre: "Carlito",
        primer_apellido: "Blazquez",
        segundo_apellido: "Tapia",
        id_direccion: 52,
        tel: "3960153801",
        correo_el: "pastor.blazquez.118@correo.com"
    },
    {
        _id: 119,
        id_hist_clinica: 119,
        primer_nombre: "Hermenegildo",
        primer_apellido: "Pastor",
        segundo_apellido: "Nadal",
        id_direccion: 50,
        tel: "3486254440",
        correo_el: "hermenegildo.pastor.119@correo.com"
    },
    {
        _id: 120,
        id_hist_clinica: 120,
        primer_nombre: "Juan",
        segundo_nombre: "Carmen",
        primer_apellido: "Rocamora",
        segundo_apellido: "Santos",
        id_direccion: 15,
        tel: "3248488301",
        correo_el: "juan.rocamora.120@correo.com"
    },
    {
        _id: 121,
        id_hist_clinica: 121,
        primer_nombre: "Jose",
        segundo_nombre: "Carlos",
        primer_apellido: "Maldonado",
        segundo_apellido: "Cazorla",
        id_direccion: 73,
        tel: "3365190266",
        correo_el: "jose.maldonado.121@correo.com"
    },
    {
        _id: 122,
        id_hist_clinica: 122,
        primer_nombre: "Salomon",
        primer_apellido: "Burgos",
        segundo_apellido: "Querol",
        id_direccion: 65,
        tel: "3427090021",
        correo_el: "salomon.burgos.122@correo.com"
    },
    {
        _id: 123,
        id_hist_clinica: 123,
        primer_nombre: "Ana",
        primer_apellido: "Laguna",
        segundo_apellido: "Paniagua",
        id_direccion: 10,
        tel: "3877116881",
        correo_el: "ana.laguna.123@correo.com"
    },
    {
        _id: 124,
        id_hist_clinica: 124,
        primer_nombre: "Odalys",
        segundo_nombre: "Fabio",
        primer_apellido: "Vaquero",
        segundo_apellido: "Hervia",
        id_direccion: 19,
        tel: "3717966869",
        correo_el: "odalys.vaquero.124@correo.com"
    },
    {
        _id: 125,
        id_hist_clinica: 125,
        primer_nombre: "Encarnacion",
        primer_apellido: "Nunez",
        segundo_apellido: "Gamez",
        id_direccion: 114,
        tel: "3754498747",
        correo_el: "encarnacion.nunez.125@correo.com"
    },
    {
        _id: 126,
        id_hist_clinica: 126,
        primer_nombre: "Isabel",
        primer_apellido: "Teruel",
        segundo_apellido: "Escobar",
        id_direccion: 12,
        tel: "3132615826",
        correo_el: "isabel.teruel.126@correo.com"
    },
    {
        _id: 127,
        id_hist_clinica: 127,
        primer_nombre: "Lola",
        segundo_nombre: "Ramon",
        primer_apellido: "Cabanas",
        segundo_apellido: "Montenegro",
        id_direccion: 103,
        tel: "3663189807",
        correo_el: "lola.cabanas.127@correo.com"
    }
]);

//inserciones medicos

db.medicos.insertMany([
    {
        _id: 1,
        num_colegiatura: "241531",
        primer_nombre: "Carlos",
        segundo_nombre: "Andrés",
        primer_apellido: "García",
        segundo_apellido: "Rincón",
        tel: "3118742984",
        correo_el: "carlos.andres73@gmail.com",
        salario: NumberDecimal("5982378.54"),
        id_hospital: 1
    },
    {
        _id: 2,
        num_colegiatura: "738291",
        primer_nombre: "Laura",
        primer_apellido: "Martínez",
        segundo_apellido: "Becerra",
        tel: "3157290047",
        correo_el: "lauramartinez58@gmail.com",
        salario: NumberDecimal("7163842.00"),
        id_hospital: 2
    },
    {
        _id: 3,
        num_colegiatura: "982345",
        primer_nombre: "Juan",
        segundo_nombre: "Sebastián",
        primer_apellido: "Ramírez",
        segundo_apellido: "Lozano",
        tel: "3009123475",
        correo_el: "juansebastian46@gmail.com",
        salario: NumberDecimal("8005000.00"),
        id_hospital: 3
    },
    {
        _id: 4,
        num_colegiatura: "573920",
        primer_nombre: "Camila",
        segundo_nombre: "Isabel",
        primer_apellido: "Fernández",
        segundo_apellido: "Rodríguez",
        tel: "3132901837",
        correo_el: "camila.isabel79@gmail.com",
        salario: NumberDecimal("9245600.40"),
        id_hospital: 1
    },
    {
        _id: 5,
        num_colegiatura: "120934",
        primer_nombre: "Felipe",
        primer_apellido: "Rojas",
        segundo_apellido: "Díaz",
        tel: "3162039485",
        correo_el: "feliperojas39@gmail.com",
        salario: NumberDecimal("4600200.00"),
        id_hospital: 4
    },
    {
        _id: 6,
        num_colegiatura: "890321",
        primer_nombre: "Andrea",
        segundo_nombre: "Patricia",
        primer_apellido: "Morales",
        segundo_apellido: "Pineda",
        tel: "3109372845",
        correo_el: "andreapatricia64@gmail.com",
        salario: NumberDecimal("8701000.00"),
        id_hospital: 2
    },
    {
        _id: 7,
        num_colegiatura: "672839",
        primer_nombre: "Luis",
        segundo_nombre: "Eduardo",
        primer_apellido: "Peña",
        segundo_apellido: "Suárez",
        tel: "3123849102",
        correo_el: "luiseduardo83@gmail.com",
        salario: NumberDecimal("9000000.00"),
        id_hospital: 5
    },
    {
        _id: 8,
        num_colegiatura: "384920",
        primer_nombre: "Diana",
        primer_apellido: "Gómez",
        segundo_apellido: "Acevedo",
        tel: "3193849281",
        correo_el: "dianagomez62@gmail.com",
        salario: NumberDecimal("4755000.00"),
        id_hospital: 3
    },
    {
        _id: 9,
        num_colegiatura: "109283",
        primer_nombre: "Jorge",
        segundo_nombre: "Iván",
        primer_apellido: "Sánchez",
        segundo_apellido: "Castro",
        tel: "3173840192",
        correo_el: "jorgeivan41@gmail.com",
        salario: NumberDecimal("5040000.00"),
        id_hospital: 1
    },
    {
        _id: 10,
        num_colegiatura: "821390",
        primer_nombre: "María",
        primer_apellido: "López",
        segundo_apellido: "Ortiz",
        tel: "3147281902",
        correo_el: "marialopez84@gmail.com",
        salario: NumberDecimal("4824000.00"),
        id_hospital: 5
    },
    {
        _id: 11,
        num_colegiatura: "483920",
        primer_nombre: "Pedro",
        segundo_nombre: "Antonio",
        primer_apellido: "Cárdenas",
        segundo_apellido: "Vargas",
        tel: "3009283719",
        correo_el: "pedroantonio92@gmail.com",
        salario: NumberDecimal("6780000.00"),
        id_hospital: 2
    },
    {
        _id: 12,
        num_colegiatura: "298374",
        primer_nombre: "Natalia",
        segundo_nombre: "Andrea",
        primer_apellido: "Herrera",
        segundo_apellido: "Gómez",
        tel: "3192837490",
        correo_el: "natalia.andrea27@gmail.com",
        salario: NumberDecimal("9800000.00"),
        id_hospital: 4
    },
    {
        _id: 13,
        num_colegiatura: "832190",
        primer_nombre: "Samuel",
        primer_apellido: "Ortega",
        segundo_apellido: "Nieto",
        tel: "3109823748",
        correo_el: "samuelortega12@gmail.com",
        salario: NumberDecimal("4599000.00"),
        id_hospital: 2
    },
    {
        _id: 14,
        num_colegiatura: "917238",
        primer_nombre: "Juliana",
        segundo_nombre: "Pilar",
        primer_apellido: "Mendoza",
        segundo_apellido: "Castañeda",
        tel: "3129837402",
        correo_el: "juliana.pilar44@gmail.com",
        salario: NumberDecimal("11500000.00"),
        id_hospital: 3
    },
    {
        _id: 15,
        num_colegiatura: "720384",
        primer_nombre: "Miguel",
        segundo_nombre: "Ángel",
        primer_apellido: "Reyes",
        segundo_apellido: "Beltrán",
        tel: "3001928374",
        correo_el: "miguelangel73@gmail.com",
        salario: NumberDecimal("7350000.00"),
        id_hospital: 5
    },
    {
        _id: 16,
        num_colegiatura: "139284",
        primer_nombre: "Valentina",
        primer_apellido: "Castillo",
        segundo_apellido: "Mejía",
        tel: "3198273645",
        correo_el: "valentinacastillo60@gmail.com",
        salario: NumberDecimal("8600000.00"),
        id_hospital: 1
    },
    {
        _id: 17,
        num_colegiatura: "274839",
        primer_nombre: "Andrés",
        segundo_nombre: "Felipe",
        primer_apellido: "Osorio",
        segundo_apellido: "Silva",
        tel: "3178392019",
        correo_el: "andresfelipe94@gmail.com",
        salario: NumberDecimal("7200000.00"),
        id_hospital: 4
    },
    {
        _id: 18,
        num_colegiatura: "819203",
        primer_nombre: "Tatiana",
        primer_apellido: "Guzmán",
        segundo_apellido: "Ramos",
        tel: "3112093847",
        correo_el: "tatianaguzman55@gmail.com",
        salario: NumberDecimal("5800000.00"),
        id_hospital: 3
    },
    {
        _id: 19,
        num_colegiatura: "982374",
        primer_nombre: "Santiago",
        segundo_nombre: "David",
        primer_apellido: "Vargas",
        segundo_apellido: "Peñaloza",
        tel: "3182938471",
        correo_el: "santiagodavid90@gmail.com",
        salario: NumberDecimal("4900000.00"),
        id_hospital: 2
    },
    {
        _id: 20,
        num_colegiatura: "127384",
        primer_nombre: "Isabella",
        segundo_nombre: "Sofía",
        primer_apellido: "Pérez",
        segundo_apellido: "Cárdenas",
        tel: "3159382710",
        correo_el: "isabellasofia47@gmail.com",
        salario: NumberDecimal("9920000.00"),
        id_hospital: 5
    },
    {
        _id: 21,
        num_colegiatura: "839201",
        primer_nombre: "Ricardo",
        segundo_nombre: "Alonso",
        primer_apellido: "Moreno",
        segundo_apellido: "Pérez",
        tel: "3004928374",
        correo_el: "ricardoalonso15@gmail.com",
        salario: NumberDecimal("8700000.00"),
        id_hospital: 1
    },
    {
        _id: 22,
        num_colegiatura: "920384",
        primer_nombre: "Elena",
        primer_apellido: "Carrillo",
        segundo_apellido: "Forero",
        tel: "3182739401",
        correo_el: "elenacarrillo27@gmail.com",
        salario: NumberDecimal("4600000.00"),
        id_hospital: 3
    },
    {
        _id: 23,
        num_colegiatura: "473920",
        primer_nombre: "Sebastián",
        segundo_nombre: "Iván",
        primer_apellido: "Bautista",
        segundo_apellido: "Vega",
        tel: "3129481720",
        correo_el: "sebastianivan22@gmail.com",
        salario: NumberDecimal("7300000.00"),
        id_hospital: 2
    },
    {
        _id: 24,
        num_colegiatura: "781239",
        primer_nombre: "Luisa",
        segundo_nombre: "Fernanda",
        primer_apellido: "Ruiz",
        segundo_apellido: "Moncada",
        tel: "3193847291",
        correo_el: "luisafernanda93@gmail.com",
        salario: NumberDecimal("9200000.00"),
        id_hospital: 5
    },
    {
        _id: 25,
        num_colegiatura: "903248",
        primer_nombre: "Tomás",
        primer_apellido: "Delgado",
        segundo_apellido: "Navarro",
        tel: "3167482910",
        correo_el: "tomasdelgado61@gmail.com",
        salario: NumberDecimal("6900000.00"),
        id_hospital: 4
    },
    {
        _id: 26,
        num_colegiatura: "129384",
        primer_nombre: "Karen",
        segundo_nombre: "Melissa",
        primer_apellido: "Rincón",
        segundo_apellido: "Hernández",
        tel: "3119203847",
        correo_el: "karenmelissa86@gmail.com",
        salario: NumberDecimal("8900000.00"),
        id_hospital: 1
    },
    {
        _id: 27,
        num_colegiatura: "738920",
        primer_nombre: "Daniel",
        segundo_nombre: "Esteban",
        primer_apellido: "Torres",
        segundo_apellido: "Jiménez",
        tel: "3174928371",
        correo_el: "danielesteban74@gmail.com",
        salario: NumberDecimal("5100000.00"),
        id_hospital: 3
    },
    {
        _id: 28,
        num_colegiatura: "239481",
        primer_nombre: "Paola",
        primer_apellido: "Cruz",
        segundo_apellido: "Marín",
        tel: "3158203947",
        correo_el: "paolacruz48@gmail.com",
        salario: NumberDecimal("5990000.00"),
        id_hospital: 2
    },
    {
        _id: 29,
        num_colegiatura: "922929",
        primer_nombre: "Cristian",
        segundo_nombre: "Mauricio",
        primer_apellido: "Muñoz",
        segundo_apellido: "Galvis",
        tel: "3104928374",
        correo_el: "cristianmauricio21@gmail.com",
        salario: NumberDecimal("8700000.00"),
        id_hospital: 5
    },
    {
        _id: 30,
        num_colegiatura: "341920",
        primer_nombre: "Lucía",
        segundo_nombre: "Beatriz",
        primer_apellido: "Romero",
        segundo_apellido: "Chávez",
        tel: "3182937401",
        correo_el: "luciabeatriz92@gmail.com",
        salario: NumberDecimal("7800000.00"),
        id_hospital: 1
    },
    {
        _id: 31,
        num_colegiatura: "119283",
        primer_nombre: "Mauricio",
        primer_apellido: "Serrano",
        segundo_apellido: "Ávila",
        tel: "3148293847",
        correo_el: "mauricioserrano59@gmail.com",
        salario: NumberDecimal("6150000.00"),
        id_hospital: 3
    },
    {
        _id: 32,
        num_colegiatura: "829103",
        primer_nombre: "Melissa",
        segundo_nombre: "Juliana",
        primer_apellido: "Camargo",
        segundo_apellido: "Salinas",
        tel: "3139482710",
        correo_el: "melissajuliana66@gmail.com",
        salario: NumberDecimal("7450000.00"),
        id_hospital: 4
    },
    {
        _id: 33,
        num_colegiatura: "781294",
        primer_nombre: "Oscar",
        segundo_nombre: "Iván",
        primer_apellido: "Castaño",
        segundo_apellido: "Rangel",
        tel: "3162938472",
        correo_el: "oscarivan91@gmail.com",
        salario: NumberDecimal("9050000.00"),
        id_hospital: 2
    },
    {
        _id: 34,
        num_colegiatura: "283910",
        primer_nombre: "Carolina",
        segundo_nombre: "Mar",
        primer_apellido: "Zambrano",
        segundo_apellido: "Gaitán",
        tel: "3009283746",
        correo_el: "carolinamar57@gmail.com",
        salario: NumberDecimal("11000000.00"),
        id_hospital: 5
    },
    {
        _id: 35,
        num_colegiatura: "578102",
        primer_nombre: "Rodrigo",
        primer_apellido: "Beltrán",
        segundo_apellido: "Parra",
        tel: "3128492018",
        correo_el: "rodrigobeltran84@gmail.com",
        salario: NumberDecimal("5200000.00"),
        id_hospital: 3
    },
    {
        _id: 36,
        num_colegiatura: "928371",
        primer_nombre: "Angela",
        segundo_nombre: "María",
        primer_apellido: "Salazar",
        segundo_apellido: "Camacho",
        tel: "3149283745",
        correo_el: "angelamaria37@gmail.com",
        salario: NumberDecimal("9000000.00"),
        id_hospital: 1
    },
    {
        _id: 37,
        num_colegiatura: "920138",
        primer_nombre: "Esteban",
        segundo_nombre: "Alexander",
        primer_apellido: "Álvarez",
        segundo_apellido: "Guerra",
        tel: "3103847291",
        correo_el: "estebanalexander73@gmail.com",
        salario: NumberDecimal("9800000.00"),
        id_hospital: 4
    },
    {
        _id: 38,
        num_colegiatura: "481029",
        primer_nombre: "Gloria",
        primer_apellido: "Vergara",
        segundo_apellido: "Quintero",
        tel: "3192837409",
        correo_el: "gloriavergara24@gmail.com",
        salario: NumberDecimal("4650000.00"),
        id_hospital: 2
    },
    {
        _id: 39,
        num_colegiatura: "823910",
        primer_nombre: "Francisco",
        segundo_nombre: "Javier",
        primer_apellido: "Montoya",
        segundo_apellido: "Luna",
        tel: "3119384720",
        correo_el: "franciscojavier83@gmail.com",
        salario: NumberDecimal("8250000.00"),
        id_hospital: 5
    },
    {
        _id: 40,
        num_colegiatura: "298103",
        primer_nombre: "Manuela",
        primer_apellido: "Reina",
        segundo_apellido: "Arias",
        tel: "3123847290",
        correo_el: "manuelareina95@gmail.com",
        salario: NumberDecimal("5800000.00"),
        id_hospital: 1
    },
    {
        _id: 41,
        num_colegiatura: "820194",
        primer_nombre: "Jesús",
        segundo_nombre: "Emilio",
        primer_apellido: "Vargas",
        segundo_apellido: "Correa",
        tel: "3109283746",
        correo_el: "jesusemilio46@gmail.com",
        salario: NumberDecimal("6990000.00"),
        id_hospital: 3
    },
    {
        _id: 42,
        num_colegiatura: "849201",
        primer_nombre: "Viviana",
        segundo_nombre: "Alejandra",
        primer_apellido: "Morales",
        segundo_apellido: "López",
        tel: "3162039487",
        correo_el: "vivianaalejandra32@gmail.com",
        salario: NumberDecimal("9300000.00"),
        id_hospital: 2
    },
    {
        _id: 43,
        num_colegiatura: "739201",
        primer_nombre: "Alejandro",
        segundo_nombre: "Manuel",
        primer_apellido: "Guerrero",
        segundo_apellido: "Moreno",
        tel: "3192837400",
        correo_el: "alejandromanuel28@gmail.com",
        salario: NumberDecimal("6700000.00"),
        id_hospital: 5
    },
    {
        _id: 44,
        num_colegiatura: "284019",
        primer_nombre: "Catalina",
        primer_apellido: "Medina",
        segundo_apellido: "Ortiz",
        tel: "3123849271",
        correo_el: "catalinamedina75@gmail.com",
        salario: NumberDecimal("4650000.00"),
        id_hospital: 3
    },
    {
        _id: 45,
        num_colegiatura: "821374",
        primer_nombre: "Kevin",
        segundo_nombre: "Andrés",
        primer_apellido: "Ruiz",
        segundo_apellido: "Carrillo",
        tel: "3138472910",
        correo_el: "kevinandres30@gmail.com",
        salario: NumberDecimal("5020000.00"),
        id_hospital: 2
    },
    {
        _id: 46,
        num_colegiatura: "849210",
        primer_nombre: "Lina",
        segundo_nombre: "Marcela",
        primer_apellido: "Calderón",
        segundo_apellido: "Ramírez",
        tel: "3112093846",
        correo_el: "linamarcela12@gmail.com",
        salario: NumberDecimal("9000000.00"),
        id_hospital: 1
    },
    {
        _id: 47,
        num_colegiatura: "948210",
        primer_nombre: "Gabriel",
        segundo_nombre: "Fernando",
        primer_apellido: "Duarte",
        segundo_apellido: "Martínez",
        tel: "3183749201",
        correo_el: "gabrielfernando11@gmail.com",
        salario: NumberDecimal("6100000.00"),
        id_hospital: 5
    },
    {
        _id: 48,
        num_colegiatura: "574839",
        primer_nombre: "Adriana",
        segundo_nombre: "Lucía",
        primer_apellido: "Peña",
        segundo_apellido: "Guzmán",
        tel: "3149283746",
        correo_el: "adrianalucia77@gmail.com",
        salario: NumberDecimal("8100000.00"),
        id_hospital: 4
    },
    {
        _id: 49,
        num_colegiatura: "328194",
        primer_nombre: "Jonathan",
        segundo_nombre: "David",
        primer_apellido: "Cabrera",
        segundo_apellido: "Pérez",
        tel: "3129837490",
        correo_el: "jonathandavid29@gmail.com",
        salario: NumberDecimal("7100000.00"),
        id_hospital: 3
    },
    {
        _id: 50,
        num_colegiatura: "729103",
        primer_nombre: "Lorena",
        segundo_nombre: "Vanessa",
        primer_apellido: "Mejía",
        segundo_apellido: "Rodríguez",
        tel: "3103849201",
        correo_el: "lorenavanessa62@gmail.com",
        salario: NumberDecimal("5700000.00"),
        id_hospital: 1
    },
    {
        _id: 51,
        num_colegiatura: "219384",
        primer_nombre: "Álvaro",
        segundo_nombre: "José",
        primer_apellido: "Valencia",
        segundo_apellido: "Mora",
        tel: "3162837492",
        correo_el: "alvarojose38@gmail.com",
        salario: NumberDecimal("8450000.00"),
        id_hospital: 4
    },
    {
        _id: 52,
        num_colegiatura: "938472",
        primer_nombre: "Daniela",
        segundo_nombre: "Alejandra",
        primer_apellido: "Vargas",
        segundo_apellido: "Gutiérrez",
        tel: "3129483710",
        correo_el: "danielaalejandra67@gmail.com",
        salario: NumberDecimal("9500000.00"),
        id_hospital: 5
    },
    {
        _id: 53,
        num_colegiatura: "738294",
        primer_nombre: "Fernando",
        primer_apellido: "Salinas",
        segundo_apellido: "Villamizar",
        tel: "3119283745",
        correo_el: "fernandosalinas24@gmail.com",
        salario: NumberDecimal("6300000.00"),
        id_hospital: 2
    },
    {
        _id: 54,
        num_colegiatura: "102938",
        primer_nombre: "Tatiana",
        segundo_nombre: "Lucía",
        primer_apellido: "Ramos",
        segundo_apellido: "Chacón",
        tel: "3192837402",
        correo_el: "tatianalucia50@gmail.com",
        salario: NumberDecimal("7400000.00"),
        id_hospital: 1
    },
    {
        _id: 55,
        num_colegiatura: "728194",
        primer_nombre: "Sergio",
        segundo_nombre: "Esteban",
        primer_apellido: "Pardo",
        segundo_apellido: "León",
        tel: "3149283749",
        correo_el: "sergioesteban88@gmail.com",
        salario: NumberDecimal("7900000.00"),
        id_hospital: 3
    },
    {
        _id: 56,
        num_colegiatura: "843920",
        primer_nombre: "Karol",
        segundo_nombre: "Andrea",
        primer_apellido: "Chaparro",
        segundo_apellido: "Moreno",
        tel: "3183749203",
        correo_el: "karolandrea55@gmail.com",
        salario: NumberDecimal("8200000.00"),
        id_hospital: 4
    },
    {
        _id: 57,
        num_colegiatura: "823749",
        primer_nombre: "Julián",
        primer_apellido: "Cano",
        segundo_apellido: "Delgado",
        tel: "3009283747",
        correo_el: "juliancano43@gmail.com",
        salario: NumberDecimal("6550000.00"),
        id_hospital: 5
    },
    {
        _id: 58,
        num_colegiatura: "835858",
        primer_nombre: "Manuel",
        segundo_nombre: "Felipe",
        primer_apellido: "Espinosa",
        segundo_apellido: "Quintero",
        tel: "3162837409",
        correo_el: "manuelfelipe19@gmail.com",
        salario: NumberDecimal("9600000.00"),
        id_hospital: 1
    },
    {
        _id: 59,
        num_colegiatura: "473829",
        primer_nombre: "Mariana",
        segundo_nombre: "Paola",
        primer_apellido: "Durán",
        segundo_apellido: "Martínez",
        tel: "3109283749",
        correo_el: "marianapaola91@gmail.com",
        salario: NumberDecimal("8850000.00"),
        id_hospital: 3
    },
    {
        _id: 60,
        num_colegiatura: "102384",
        primer_nombre: "Camilo",
        segundo_nombre: "Andrés",
        primer_apellido: "Ramírez",
        segundo_apellido: "Figueroa",
        tel: "3139283740",
        correo_el: "camiloandres30@gmail.com",
        salario: NumberDecimal("7300000.00"),
        id_hospital: 2
    },
    {
        _id: 61,
        num_colegiatura: "839102",
        primer_nombre: "Yolanda",
        segundo_nombre: "Beatriz",
        primer_apellido: "García",
        segundo_apellido: "Suárez",
        tel: "3119283742",
        correo_el: "yolandabeatriz44@gmail.com",
        salario: NumberDecimal("9800000.00"),
        id_hospital: 5
    },
    {
        _id: 62,
        num_colegiatura: "738102",
        primer_nombre: "Diego",
        primer_apellido: "Ríos",
        segundo_apellido: "Ortiz",
        tel: "3123847289",
        correo_el: "diegorios52@gmail.com",
        salario: NumberDecimal("5000000.00"),
        id_hospital: 4
    },
    {
        _id: 63,
        num_colegiatura: "736326",
        primer_nombre: "Elisa",
        segundo_nombre: "Julieta",
        primer_apellido: "Santos",
        segundo_apellido: "Montes",
        tel: "3183749204",
        correo_el: "elisajulieta16@gmail.com",
        salario: NumberDecimal("6000000.00"),
        id_hospital: 1
    }
]);

//inserciones per_admin

db.per_admin.insertMany([
    {
        _id: 1,
        primer_nombre: "Carlos",
        segundo_nombre: "Eduardo",
        primer_apellido: "Rodríguez",
        segundo_apellido: "García",
        tel: "3001234567",
        correo_el: "carlos.rodriguez1@gmail.com",
        cargo: "Jefe de Finanzas",
        area_resp: "Finanzas",
        salario: NumberDecimal("4300000"),
        id_hospital: 1
    },
    {
        _id: 2,
        primer_nombre: "Luisa",
        primer_apellido: "Martínez",
        segundo_apellido: "Pérez",
        tel: "3019876543",
        correo_el: "luisa.martinez2@yahoo.com",
        cargo: "Recepcionista",
        area_resp: "Recepción",
        salario: NumberDecimal("1800000"),
        id_hospital: 3
    },
    {
        _id: 3,
        primer_nombre: "Andrés",
        segundo_nombre: "Felipe",
        primer_apellido: "Suárez",
        segundo_apellido: "Gómez",
        tel: "3021112233",
        correo_el: "andres.suarez3@outlook.com",
        cargo: "Analista Contable",
        area_resp: "Contabilidad",
        salario: NumberDecimal("2500000"),
        id_hospital: 2
    },
    {
        _id: 4,
        primer_nombre: "Natalia",
        primer_apellido: "Castillo",
        segundo_apellido: "Ramírez",
        tel: "3035556677",
        correo_el: "natalia.castillo4@hotmail.com",
        cargo: "Gestor de Calidad",
        area_resp: "Calidad",
        salario: NumberDecimal("2800000"),
        id_hospital: 4
    },
    {
        _id: 5,
        primer_nombre: "Jorge",
        segundo_nombre: "Iván",
        primer_apellido: "Morales",
        segundo_apellido: "Torres",
        tel: "3049998888",
        correo_el: "jorge.morales5@gmail.com",
        cargo: "Tesorero/a",
        area_resp: "Tesorería",
        salario: NumberDecimal("3500000"),
        id_hospital: 1
    },
    {
        _id: 6,
        primer_nombre: "Mónica",
        segundo_nombre: "Alejandra",
        primer_apellido: "Díaz",
        segundo_apellido: "Rojas",
        tel: "3052223344",
        correo_el: "monica.diaz6@yahoo.com",
        cargo: "Coordinador de Servicios Generales",
        area_resp: "Servicios Generales",
        salario: NumberDecimal("2700000"),
        id_hospital: 5
    },
    {
        _id: 7,
        primer_nombre: "Esteban",
        primer_apellido: "Gutiérrez",
        segundo_apellido: "Vargas",
        tel: "3061122334",
        correo_el: "esteban.gutierrez7@outlook.com",
        cargo: "Jefe de Recursos Humanos",
        area_resp: "Talento Humano",
        salario: NumberDecimal("3900000"),
        id_hospital: 2
    },
    {
        _id: 8,
        primer_nombre: "Paula",
        segundo_nombre: "Andrea",
        primer_apellido: "Mejía",
        segundo_apellido: "Lozano",
        tel: "3074433221",
        correo_el: "paula.mejia8@gmail.com",
        cargo: "Coordinador de Talento Humano",
        area_resp: "Talento Humano",
        salario: NumberDecimal("3100000"),
        id_hospital: 3
    },
    {
        _id: 9,
        primer_nombre: "Diana",
        primer_apellido: "Ortiz",
        segundo_apellido: "Navarro",
        tel: "3085566778",
        correo_el: "diana.ortiz9@hotmail.com",
        cargo: "Secretario/a General",
        area_resp: "Contratación",
        salario: NumberDecimal("2600000"),
        id_hospital: 4
    },
    {
        _id: 10,
        primer_nombre: "Ricardo",
        primer_apellido: "Reyes",
        segundo_apellido: "Camargo",
        tel: "3097788990",
        correo_el: "ricardo.reyes10@yahoo.com",
        cargo: "Director Jurídico",
        area_resp: "Jurídica",
        salario: NumberDecimal("4500000"),
        id_hospital: 1
    },
    {
        _id: 11,
        primer_nombre: "Valeria",
        segundo_nombre: "Lucía",
        primer_apellido: "Salazar",
        segundo_apellido: "Mendoza",
        tel: "3001122334",
        correo_el: "valeria.salazar11@outlook.com",
        cargo: "Asistente Administrativo",
        area_resp: "Planeación",
        salario: NumberDecimal("2200000"),
        id_hospital: 5
    }
]);

//inserciones enfermeros

db.enfermeros.insertMany([
    {
        _id: 1,
        primer_nombre: "Jenaro",
        segundo_nombre: "Eliana",
        primer_apellido: "Martí",
        segundo_apellido: "Carrión",
        tel: "3285623940",
        correo_el: "jenaro.marti711@hotmail.com",
        salario: NumberDecimal("2850000"),
        id_hospital: 1
    },
    {
        _id: 2,
        primer_nombre: "Tiburcio",
        segundo_nombre: "Virgilio",
        primer_apellido: "Coloma",
        segundo_apellido: "Poza",
        tel: "3561523786",
        correo_el: "tiburcio.coloma38@gmail.com",
        salario: NumberDecimal("2450000"),
        id_hospital: 2
    },
    {
        _id: 3,
        primer_nombre: "Vito",
        segundo_nombre: "Paco",
        primer_apellido: "Frutos",
        segundo_apellido: "Exposito",
        tel: "3514222961",
        correo_el: "vito.frutos731@hotmail.com",
        salario: NumberDecimal("2280000"),
        id_hospital: 3
    },
    {
        _id: 4,
        primer_nombre: "Ligia",
        segundo_nombre: "Elba",
        primer_apellido: "Puerta",
        segundo_apellido: "Cabrera",
        tel: "3405536563",
        correo_el: "ligia.puerta469@hotmail.com",
        salario: NumberDecimal("1950000"),
        id_hospital: 4
    },
    {
        _id: 5,
        primer_nombre: "Chita",
        primer_apellido: "Calleja",
        segundo_apellido: "Calderón",
        tel: "3398471062",
        correo_el: "chita.calleja229@gmail.com",
        salario: NumberDecimal("2180000"),
        id_hospital: 5
    },
    {
        _id: 6,
        primer_nombre: "Leonor",
        primer_apellido: "Tovar",
        segundo_apellido: "Chaves",
        tel: "3680174372",
        correo_el: "leonor.tovar942@yahoo.com",
        salario: NumberDecimal("2650000"),
        id_hospital: 1
    },
    {
        _id: 7,
        primer_nombre: "Eutropio",
        segundo_nombre: "Benigna",
        primer_apellido: "Perea",
        segundo_apellido: "Llorens",
        tel: "3926623577",
        correo_el: "eutropio.perea811@gmail.com",
        salario: NumberDecimal("3120000"),
        id_hospital: 2
    },
    {
        _id: 8,
        primer_nombre: "Toribio",
        segundo_nombre: "José",
        primer_apellido: "Cobo",
        segundo_apellido: "Escrivá",
        tel: "3909094796",
        correo_el: "toribio.cobo761@yahoo.com",
        salario: NumberDecimal("3150000"),
        id_hospital: 3
    },
    {
        _id: 9,
        primer_nombre: "Ema",
        primer_apellido: "Roma",
        segundo_apellido: "Zaragoza",
        tel: "3287720028",
        correo_el: "ema.roma166@yahoo.com",
        salario: NumberDecimal("3280000"),
        id_hospital: 4
    },
    {
        _id: 10,
        primer_nombre: "Nacho",
        segundo_nombre: "Bartolomé",
        primer_apellido: "Planas",
        segundo_apellido: "Samper",
        tel: "3615405058",
        correo_el: "nacho.planas210@gmail.com",
        salario: NumberDecimal("2480000"),
        id_hospital: 5
    },
    {
        _id: 11,
        primer_nombre: "Alex",
        segundo_nombre: "Coral",
        primer_apellido: "Iniesta",
        segundo_apellido: "Tur",
        tel: "3311127278",
        correo_el: "alex.iniesta757@yahoo.com",
        salario: NumberDecimal("2680000"),
        id_hospital: 1
    },
    {
        _id: 12,
        primer_nombre: "Manuel",
        segundo_nombre: "Abraham",
        primer_apellido: "Bas",
        segundo_apellido: "Cantero",
        tel: "3987648535",
        correo_el: "manuel.bas487@gmail.com",
        salario: NumberDecimal("2420000"),
        id_hospital: 2
    },
    {
        _id: 13,
        primer_nombre: "Amando",
        primer_apellido: "Macías",
        segundo_apellido: "Salom",
        tel: "3362822938",
        correo_el: "amando.macias450@hotmail.com",
        salario: NumberDecimal("3100000"),
        id_hospital: 3
    },
    {
        _id: 14,
        primer_nombre: "Maura",
        primer_apellido: "Gil",
        segundo_apellido: "Busquets",
        tel: "3088261523",
        correo_el: "maura.gil889@hotmail.com",
        salario: NumberDecimal("1850000"),
        id_hospital: 4
    },
    {
        _id: 15,
        primer_nombre: "Irma",
        segundo_nombre: "Rufino",
        primer_apellido: "Aparicio",
        segundo_apellido: "Alvarez",
        tel: "3011759865",
        correo_el: "irma.aparicio666@hotmail.com",
        salario: NumberDecimal("1920000"),
        id_hospital: 5
    },
    {
        _id: 16,
        primer_nombre: "Pilar",
        primer_apellido: "Azorin",
        segundo_apellido: "Rosell",
        tel: "3319134103",
        correo_el: "pilar.azorin766@hotmail.com",
        salario: NumberDecimal("2750000"),
        id_hospital: 1
    },
    {
        _id: 17,
        primer_nombre: "Tere",
        primer_apellido: "Ponce",
        segundo_apellido: "Bustos",
        tel: "3077190496",
        correo_el: "tere.ponce821@gmail.com",
        salario: NumberDecimal("2150000"),
        id_hospital: 2
    },
    {
        _id: 18,
        primer_nombre: "Antonio",
        segundo_nombre: "Fermín",
        primer_apellido: "Peña",
        segundo_apellido: "Antúnez",
        tel: "3827105130",
        correo_el: "antonio.pena399@yahoo.com",
        salario: NumberDecimal("2620000"),
        id_hospital: 3
    },
    {
        _id: 19,
        primer_nombre: "Dominga",
        segundo_nombre: "Virgilio",
        primer_apellido: "Flor",
        segundo_apellido: "Gallego",
        tel: "3272552122",
        correo_el: "dominga.flor652@yahoo.com",
        salario: NumberDecimal("2460000"),
        id_hospital: 4
    },
    {
        _id: 20,
        primer_nombre: "Fito",
        primer_apellido: "Giralt",
        segundo_apellido: "Bru",
        tel: "3972383733",
        correo_el: "fito.giralt536@gmail.com",
        salario: NumberDecimal("2080000"),
        id_hospital: 5
    },
    {
        _id: 21,
        primer_nombre: "María",
        primer_apellido: "Farré",
        segundo_apellido: "Ávila",
        tel: "3223391499",
        correo_el: "maria.farre263@hotmail.com",
        salario: NumberDecimal("2830000"),
        id_hospital: 1
    },
    {
        _id: 22,
        primer_nombre: "Nicanor",
        segundo_nombre: "Adelina",
        primer_apellido: "Coronado",
        segundo_apellido: "Leon",
        tel: "3002188327",
        correo_el: "nicanor.coronado630@gmail.com",
        salario: NumberDecimal("2380000"),
        id_hospital: 2
    },
    {
        _id: 23,
        primer_nombre: "Candelario",
        primer_apellido: "Alegria",
        segundo_apellido: "Seco",
        tel: "3913465745",
        correo_el: "candelario.alegria341@hotmail.com",
        salario: NumberDecimal("2690000"),
        id_hospital: 3
    },
    {
        _id: 24,
        primer_nombre: "Aitana",
        segundo_nombre: "Alba",
        primer_apellido: "Mata",
        segundo_apellido: "Querol",
        tel: "3239113802",
        correo_el: "aitana.mata71@gmail.com",
        salario: NumberDecimal("2150000"),
        id_hospital: 4
    },
    {
        _id: 25,
        primer_nombre: "Joan",
        primer_apellido: "Maestre",
        segundo_apellido: "Bermudez",
        tel: "3335163188",
        correo_el: "joan.maestre991@yahoo.com",
        salario: NumberDecimal("2100000"),
        id_hospital: 5
    },
    {
        _id: 26,
        primer_nombre: "Brígida",
        primer_apellido: "Sandoval",
        segundo_apellido: "España",
        tel: "3218377577",
        correo_el: "brigida.sandoval997@yahoo.com",
        salario: NumberDecimal("2190000"),
        id_hospital: 1
    },
    {
        _id: 27,
        primer_nombre: "Mario",
        primer_apellido: "Garcés",
        segundo_apellido: "Rius",
        tel: "3940160634",
        correo_el: "mario.garces486@hotmail.com",
        salario: NumberDecimal("1970000"),
        id_hospital: 2
    },
    {
        _id: 28,
        primer_nombre: "Jordi",
        segundo_nombre: "Fanny",
        primer_apellido: "Garcia",
        segundo_apellido: "Nieto",
        tel: "3107455656",
        correo_el: "jordi.garcia631@yahoo.com",
        salario: NumberDecimal("2320000"),
        id_hospital: 3
    },
    {
        _id: 29,
        primer_nombre: "Galo",
        primer_apellido: "Barón",
        segundo_apellido: "Ibañez",
        tel: "3901737723",
        correo_el: "galo.baron963@hotmail.com",
        salario: NumberDecimal("2780000"),
        id_hospital: 4
    },
    {
        _id: 30,
        primer_nombre: "Cebrián",
        segundo_nombre: "Jaime",
        primer_apellido: "Aroca",
        segundo_apellido: "Cobo",
        tel: "3796043698",
        correo_el: "cebrian.aroca576@hotmail.com",
        salario: NumberDecimal("2550000"),
        id_hospital: 5
    },
    {
        _id: 31,
        primer_nombre: "María",
        primer_apellido: "Puig",
        segundo_apellido: "Morán",
        tel: "3975363306",
        correo_el: "maria.puig355@hotmail.com",
        salario: NumberDecimal("2890000"),
        id_hospital: 1
    },
    {
        _id: 32,
        primer_nombre: "Sigfrido",
        segundo_nombre: "Roque",
        primer_apellido: "Mayol",
        segundo_apellido: "Asenjo",
        tel: "3632853030",
        correo_el: "sigfrido.mayol785@gmail.com",
        salario: NumberDecimal("2020000"),
        id_hospital: 2
    },
    {
        _id: 33,
        primer_nombre: "Lupe",
        segundo_nombre: "Baudelio",
        primer_apellido: "Benavides",
        segundo_apellido: "Vall",
        tel: "3527014184",
        correo_el: "lupe.benavides977@hotmail.com",
        salario: NumberDecimal("2220000"),
        id_hospital: 3
    },
    {
        _id: 34,
        primer_nombre: "Aarón",
        primer_apellido: "Gallego",
        segundo_apellido: "Azcona",
        tel: "3640879113",
        correo_el: "aaron.gallego515@gmail.com",
        salario: NumberDecimal("2700000"),
        id_hospital: 4
    },
    {
        _id: 35,
        primer_nombre: "Micaela",
        segundo_nombre: "María",
        primer_apellido: "Peñalver",
        segundo_apellido: "Domínguez",
        tel: "3078907643",
        correo_el: "micaela.penalver670@hotmail.com",
        salario: NumberDecimal("1920000"),
        id_hospital: 5
    },
    {
        _id: 36,
        primer_nombre: "Edelmira",
        primer_apellido: "Sancho",
        segundo_apellido: "Guardiola",
        tel: "3159739821",
        correo_el: "edelmira.sancho145@hotmail.com",
        salario: NumberDecimal("2070000"),
        id_hospital: 1
    },
    {
        _id: 37,
        primer_nombre: "Jose",
        primer_apellido: "Coca",
        segundo_apellido: "Pinto",
        tel: "3689452787",
        correo_el: "jose.coca348@gmail.com",
        salario: NumberDecimal("2690000"),
        id_hospital: 2
    },
    {
        _id: 38,
        primer_nombre: "Baudelio",
        segundo_nombre: "Clarisa",
        primer_apellido: "Rosselló",
        segundo_apellido: "Alba",
        tel: "3284527659",
        correo_el: "baudelio.rossello448@hotmail.com",
        salario: NumberDecimal("2010000"),
        id_hospital: 3
    },
    {
        _id: 39,
        primer_nombre: "Teodoro",
        primer_apellido: "Montesinos",
        segundo_apellido: "Salcedo",
        tel: "3910267601",
        correo_el: "teodoro.montesinos253@hotmail.com",
        salario: NumberDecimal("3150000"),
        id_hospital: 4
    },
    {
        _id: 40,
        primer_nombre: "Georgina",
        segundo_nombre: "Claudio",
        primer_apellido: "Guardia",
        segundo_apellido: "Calvet",
        tel: "3825798253",
        correo_el: "georgina.guardia408@yahoo.com",
        salario: NumberDecimal("1940000"),
        id_hospital: 5
    },
    {
        _id: 41,
        primer_nombre: "Casemiro",
        segundo_nombre: "Manuel",
        primer_apellido: "Crespo",
        segundo_apellido: "Arteaga",
        tel: "3890588993",
        correo_el: "casemiro.crespo751@gmail.com",
        salario: NumberDecimal("2810000"),
        id_hospital: 1
    },
    {
        _id: 42,
        primer_nombre: "Francisca",
        segundo_nombre: "Herminia",
        primer_apellido: "Hernández",
        segundo_apellido: "Corral",
        tel: "3833907613",
        correo_el: "francisca.hernandez639@yahoo.com",
        salario: NumberDecimal("2090000"),
        id_hospital: 2
    },
    {
        _id: 43,
        primer_nombre: "Luís",
        primer_apellido: "Rosselló",
        segundo_apellido: "Abellán",
        tel: "3170601630",
        correo_el: "luis.rossello344@yahoo.com",
        salario: NumberDecimal("2060000"),
        id_hospital: 3
    },
    {
        _id: 44,
        primer_nombre: "Primitivo",
        segundo_nombre: "María",
        primer_apellido: "Villalba",
        segundo_apellido: "Calleja",
        tel: "3558261910",
        correo_el: "primitivo.villalba587@hotmail.com",
        salario: NumberDecimal("2810000"),
        id_hospital: 4
    },
    {
        _id: 45,
        primer_nombre: "Isabel",
        primer_apellido: "Bellido",
        segundo_apellido: "Pol",
        tel: "3042226813",
        correo_el: "isabel.bellido874@yahoo.com",
        salario: NumberDecimal("2250000"),
        id_hospital: 5
    },
    {
        _id: 46,
        primer_nombre: "Luisa",
        primer_apellido: "Niño",
        segundo_apellido: "Rovira",
        tel: "3686234778",
        correo_el: "luisa.nino836@gmail.com",
        salario: NumberDecimal("2750000"),
        id_hospital: 1
    },
    {
        _id: 47,
        primer_nombre: "Regina",
        primer_apellido: "Macias",
        segundo_apellido: "Manuel",
        tel: "3571605851",
        correo_el: "regina.macias258@yahoo.com",
        salario: NumberDecimal("2850000"),
        id_hospital: 2
    },
    {
        _id: 48,
        primer_nombre: "Rufina",
        primer_apellido: "Morales",
        segundo_apellido: "Bejarano",
        tel: "3394384762",
        correo_el: "rufina.morales988@yahoo.com",
        salario: NumberDecimal("2950000"),
        id_hospital: 3
    },
    {
        _id: 49,
        primer_nombre: "Sarita",
        segundo_nombre: "Buenaventura",
        primer_apellido: "Valero",
        segundo_apellido: "Guijarro",
        tel: "3265995372",
        correo_el: "sarita.valero107@yahoo.com",
        salario: NumberDecimal("3180000"),
        id_hospital: 4
    },
    {
        _id: 50,
        primer_nombre: "Juan",
        segundo_nombre: "Cristóbal",
        primer_apellido: "Díez",
        segundo_apellido: "Caro",
        tel: "3713553816",
        correo_el: "juan.diez258@gmail.com",
        salario: NumberDecimal("2260000"),
        id_hospital: 5
    },
    {
        _id: 51,
        primer_nombre: "Maite",
        primer_apellido: "Arroyo",
        segundo_apellido: "Rocha",
        tel: "3127742711",
        correo_el: "maite.arroyo930@yahoo.com",
        salario: NumberDecimal("2230000"),
        id_hospital: 1
    },
    {
        _id: 52,
        primer_nombre: "Cristina",
        primer_apellido: "Báez",
        segundo_apellido: "Saavedra",
        tel: "3534730604",
        correo_el: "cristina.baez368@yahoo.com",
        salario: NumberDecimal("1980000"),
        id_hospital: 2
    },
    {
        _id: 53,
        primer_nombre: "Graciana",
        segundo_nombre: "Margarita",
        primer_apellido: "Calvet",
        segundo_apellido: "Sabater",
        tel: "3620364489",
        correo_el: "graciana.calvet534@gmail.com",
        salario: NumberDecimal("2200000"),
        id_hospital: 3
    },
    {
        _id: 54,
        primer_nombre: "Eutimio",
        primer_apellido: "Rojas",
        segundo_apellido: "Espada",
        tel: "3512399168",
        correo_el: "eutimio.rojas741@yahoo.com",
        salario: NumberDecimal("1720000"),
        id_hospital: 4
    },
    {
        _id: 55,
        primer_nombre: "Anacleto",
        primer_apellido: "Saez",
        segundo_apellido: "Aragonés",
        tel: "3680362881",
        correo_el: "anacleto.saez865@gmail.com",
        salario: NumberDecimal("2410000"),
        id_hospital: 5
    },
    {
        _id: 56,
        primer_nombre: "Jerónimo",
        primer_apellido: "Barroso",
        segundo_apellido: "Noguera",
        tel: "3648665384",
        correo_el: "jeronimo.barroso523@gmail.com",
        salario: NumberDecimal("2590000"),
        id_hospital: 1
    },
    {
        _id: 57,
        primer_nombre: "Angelina",
        primer_apellido: "Amores",
        segundo_apellido: "Murillo",
        tel: "3984144731",
        correo_el: "angelina.amores305@yahoo.com",
        salario: NumberDecimal("2670000"),
        id_hospital: 2
    },
    {
        _id: 58,
        primer_nombre: "Natanael",
        segundo_nombre: "Carlos",
        primer_apellido: "Boada",
        segundo_apellido: "Perez",
        tel: "3089145363",
        correo_el: "natanael.boada987@gmail.com",
        salario: NumberDecimal("2760000"),
        id_hospital: 3
    },
    {
        _id: 59,
        primer_nombre: "Beatriz",
        segundo_nombre: "Victoriano",
        primer_apellido: "Donaire",
        segundo_apellido: "Segura",
        tel: "3393732771",
        correo_el: "beatriz.donaire540@hotmail.com",
        salario: NumberDecimal("2860000"),
        id_hospital: 4
    },
    {
        _id: 60,
        primer_nombre: "Cristian",
        primer_apellido: "Guerra",
        segundo_apellido: "Iriarte",
        tel: "3496477084",
        correo_el: "cristian.guerra183@yahoo.com",
        salario: NumberDecimal("2040000"),
        id_hospital: 5
    },
    {
        _id: 61,
        primer_nombre: "Yolanda",
        primer_apellido: "Tolosa",
        segundo_apellido: "Delgado",
        tel: "3890380454",
        correo_el: "yolanda.tolosa327@yahoo.com",
        salario: NumberDecimal("1950000"),
        id_hospital: 1
    },
    {
        _id: 62,
        primer_nombre: "Hilario",
        primer_apellido: "Roman",
        segundo_apellido: "Sáenz",
        tel: "3108667506",
        correo_el: "hilario.roman97@gmail.com",
        salario: NumberDecimal("2220000"),
        id_hospital: 2
    },
    {
        _id: 63,
        primer_nombre: "Andrés",
        segundo_nombre: "Albina",
        primer_apellido: "Agullo",
        segundo_apellido: "Martínez",
        tel: "3710233856",
        correo_el: "andres.agullo270@gmail.com",
        salario: NumberDecimal("2440000"),
        id_hospital: 3
    },
    {
        _id: 64,
        primer_nombre: "Antonio",
        primer_apellido: "Benitez",
        segundo_apellido: "Azorin",
        tel: "3780736216",
        correo_el: "antonio.benitez914@hotmail.com",
        salario: NumberDecimal("1880000"),
        id_hospital: 4
    },
    {
        _id: 65,
        primer_nombre: "Leonardo",
        segundo_nombre: "Haroldo",
        primer_apellido: "Novoa",
        segundo_apellido: "Vallés",
        tel: "3838688556",
        correo_el: "leonardo.novoa667@gmail.com",
        salario: NumberDecimal("2050000"),
        id_hospital: 5
    },
    {
        _id: 66,
        primer_nombre: "Luna",
        primer_apellido: "Leiva",
        segundo_apellido: "Andres",
        tel: "3104654410",
        correo_el: "luna.leiva17@hotmail.com",
        salario: NumberDecimal("2270000"),
        id_hospital: 1
    },
    {
        _id: 67,
        primer_nombre: "Chus",
        primer_apellido: "Maza",
        segundo_apellido: "Alba",
        tel: "3700485671",
        correo_el: "chus.maza743@gmail.com",
        salario: NumberDecimal("2380000"),
        id_hospital: 2
    },
    {
        _id: 68,
        primer_nombre: "Chelo",
        primer_apellido: "Pallares",
        segundo_apellido: "Crespi",
        tel: "3428921445",
        correo_el: "chelo.pallares20@hotmail.com",
        salario: NumberDecimal("2000000"),
        id_hospital: 3
    },
    {
        _id: 69,
        primer_nombre: "Victorino",
        segundo_nombre: "Cecilia",
        primer_apellido: "Chamorro",
        segundo_apellido: "Jaume",
        tel: "3233979621",
        correo_el: "victorino.chamorro140@yahoo.com",
        salario: NumberDecimal("2350000"),
        id_hospital: 4
    },
    {
        _id: 70,
        primer_nombre: "Darío",
        primer_apellido: "Hidalgo",
        segundo_apellido: "Sosa",
        tel: "3663386657",
        correo_el: "dario.hidalgo398@gmail.com",
        salario: NumberDecimal("1710000"),
        id_hospital: 5
    },
    {
        _id: 71,
        primer_nombre: "Azahar",
        segundo_nombre: "Nicolás",
        primer_apellido: "Lobato",
        segundo_apellido: "Abellán",
        tel: "3292681601",
        correo_el: "azahar.lobato123@hotmail.com",
        salario: NumberDecimal("2160000"),
        id_hospital: 1
    },
    {
        _id: 72,
        primer_nombre: "Esteban",
        segundo_nombre: "Raimundo",
        primer_apellido: "Macias",
        segundo_apellido: "Ferreras",
        tel: "3720932763",
        correo_el: "esteban.macias428@yahoo.com",
        salario: NumberDecimal("2760000"),
        id_hospital: 2
    },
    {
        _id: 73,
        primer_nombre: "Visitación",
        segundo_nombre: "Edu",
        primer_apellido: "Benítez",
        segundo_apellido: "Lopez",
        tel: "3620837948",
        correo_el: "visitacion.benitez156@hotmail.com",
        salario: NumberDecimal("1890000"),
        id_hospital: 3
    },
    {
        _id: 74,
        primer_nombre: "Florencia",
        segundo_nombre: "Sofía",
        primer_apellido: "Valbuena",
        segundo_apellido: "Agustí",
        tel: "3054751981",
        correo_el: "florencia.valbuena395@yahoo.com",
        salario: NumberDecimal("2110000"),
        id_hospital: 4
    },
    {
        _id: 75,
        primer_nombre: "Quirino",
        primer_apellido: "Bolaños",
        segundo_apellido: "Lillo",
        tel: "3751857335",
        correo_el: "quirino.bolanos416@gmail.com",
        salario: NumberDecimal("2240000"),
        id_hospital: 5
    },
    {
        _id: 76,
        primer_nombre: "Herminia",
        segundo_nombre: "Lucio",
        primer_apellido: "Nicolau",
        segundo_apellido: "Gisbert",
        tel: "3635054560",
        correo_el: "herminia.nicolau281@yahoo.com",
        salario: NumberDecimal("3050000"),
        id_hospital: 1
    },
    {
        _id: 77,
        primer_nombre: "Dolores",
        segundo_nombre: "Dana",
        primer_apellido: "Navarro",
        segundo_apellido: "Izquierdo",
        tel: "3793575851",
        correo_el: "dolores.navarro292@yahoo.com",
        salario: NumberDecimal("1700002.72"),
        id_hospital: 2
    },
    {
        _id: 78,
        primer_nombre: "Cintia",
        segundo_nombre: "Amador",
        primer_apellido: "Boix",
        segundo_apellido: "Cánovas",
        tel: "3272020507",
        correo_el: "cintia.boix112@yahoo.com",
        salario: NumberDecimal("1700001.96"),
        id_hospital: 3
    },
    {
        _id: 79,
        primer_nombre: "Joaquina",
        primer_apellido: "Solana",
        segundo_apellido: "Arnau",
        tel: "3349635208",
        correo_el: "joaquina.solana421@hotmail.com",
        salario: NumberDecimal("1700002.93"),
        id_hospital: 4
    },
    {
        _id: 80,
        primer_nombre: "Mario",
        segundo_nombre: "Esteban",
        primer_apellido: "Nadal",
        segundo_apellido: "Adadia",
        tel: "3236021871",
        correo_el: "mario.nadal878@gmail.com",
        salario: NumberDecimal("1700002.51"),
        id_hospital: 5
    },
    {
        _id: 81,
        primer_nombre: "Manuela",
        segundo_nombre: "Vinicio",
        primer_apellido: "Pacheco",
        segundo_apellido: "Cerdá",
        tel: "3549456669",
        correo_el: "manuela.pacheco117@hotmail.com",
        salario: NumberDecimal("1700004.63"),
        id_hospital: 1
    },
    {
        _id: 82,
        primer_nombre: "Gervasio",
        primer_apellido: "Conesa",
        segundo_apellido: "Vélez",
        tel: "3139991066",
        correo_el: "gervasio.conesa664@hotmail.com",
        salario: NumberDecimal("1700002.86"),
        id_hospital: 2
    },
    {
        _id: 83,
        primer_nombre: "Jafet",
        segundo_nombre: "Gervasio",
        primer_apellido: "Canales",
        segundo_apellido: "Guerrero",
        tel: "3177566731",
        correo_el: "jafet.canales697@hotmail.com",
        salario: NumberDecimal("1700004.70"),
        id_hospital: 3
    },
    {
        _id: 84,
        primer_nombre: "Débora",
        segundo_nombre: "Marisela",
        primer_apellido: "Rivera",
        segundo_apellido: "Benítez",
        tel: "3245464806",
        correo_el: "debora.rivera659@yahoo.com",
        salario: NumberDecimal("1700001.87"),
        id_hospital: 4
    },
    {
        _id: 85,
        primer_nombre: "Raimundo",
        segundo_nombre: "Mario",
        primer_apellido: "Olivera",
        segundo_apellido: "Linares",
        tel: "3809511044",
        correo_el: "raimundo.olivera14@hotmail.com",
        salario: NumberDecimal("1700003.98"),
        id_hospital: 5
    },
    {
        _id: 86,
        primer_nombre: "Soledad",
        primer_apellido: "Pintor",
        segundo_apellido: "Vaquero",
        tel: "3093119549",
        correo_el: "soledad.pintor552@gmail.com",
        salario: NumberDecimal("1700004.42"),
        id_hospital: 1
    },
    {
        _id: 87,
        primer_nombre: "Eva",
        segundo_nombre: "Flavio",
        primer_apellido: "Adadia",
        segundo_apellido: "Ramis",
        tel: "3983040973",
        correo_el: "eva.adadia165@yahoo.com",
        salario: NumberDecimal("1700003.31"),
        id_hospital: 2
    },
    {
        _id: 88,
        primer_nombre: "Jennifer",
        segundo_nombre: "Aurora",
        primer_apellido: "Peiró",
        segundo_apellido: "Jáuregui",
        tel: "3279132074",
        correo_el: "jennifer.peiro954@yahoo.com",
        salario: NumberDecimal("1700003.89"),
        id_hospital: 3
    },
    {
        _id: 89,
        primer_nombre: "África",
        primer_apellido: "Escolano",
        segundo_apellido: "Daza",
        tel: "3187481443",
        correo_el: "africa.escolano952@gmail.com",
        salario: NumberDecimal("1700004.76"),
        id_hospital: 4
    },
    {
        _id: 90,
        primer_nombre: "Asdrubal",
        segundo_nombre: "Rocío",
        primer_apellido: "Fuentes",
        segundo_apellido: "Soriano",
        tel: "3247245703",
        correo_el: "asdrubal.fuentes302@hotmail.com",
        salario: NumberDecimal("1700004.55"),
        id_hospital: 5
    },
    {
        _id: 91,
        primer_nombre: "Imelda",
        primer_apellido: "Verdejo",
        segundo_apellido: "Lloret",
        tel: "3777091077",
        correo_el: "imelda.verdejo453@gmail.com",
        salario: NumberDecimal("1700002.50"),
        id_hospital: 1
    },
    {
        _id: 92,
        primer_nombre: "Heliodoro",
        segundo_nombre: "Iris",
        primer_apellido: "Echevarría",
        segundo_apellido: "Mateo",
        tel: "3494764297",
        correo_el: "heliodoro.echevarria104@yahoo.com",
        salario: NumberDecimal("1700002.13"),
        id_hospital: 2
    },
    {
        _id: 93,
        primer_nombre: "Elisa",
        primer_apellido: "Cuadrado",
        segundo_apellido: "Pages",
        tel: "3393021461",
        correo_el: "elisa.cuadrado289@hotmail.com",
        salario: NumberDecimal("1700003.36"),
        id_hospital: 3
    },
    {
        _id: 94,
        primer_nombre: "Daniela",
        segundo_nombre: "Apolinar",
        primer_apellido: "Garrido",
        segundo_apellido: "Losa",
        tel: "3497372433",
        correo_el: "daniela.garrido490@yahoo.com",
        salario: NumberDecimal("1700003.39"),
        id_hospital: 4
    },
    {
        _id: 95,
        primer_nombre: "Mariano",
        primer_apellido: "Cantón",
        segundo_apellido: "Vizcaíno",
        tel: "3325373388",
        correo_el: "mariano.canton747@yahoo.com",
        salario: NumberDecimal("1700002.01"),
        id_hospital: 5
    },
    {
        _id: 96,
        primer_nombre: "Amílcar",
        primer_apellido: "Palomares",
        segundo_apellido: "Casal",
        tel: "3631746251",
        correo_el: "amilcar.palomares684@hotmail.com",
        salario: NumberDecimal("1700004.42"),
        id_hospital: 1
    },
    {
        _id: 97,
        primer_nombre: "Isaías",
        primer_apellido: "Prats",
        segundo_apellido: "Galán",
        tel: "3256451853",
        correo_el: "isaias.prats134@gmail.com",
        salario: NumberDecimal("1700002.30"),
        id_hospital: 2
    },
    {
        _id: 98,
        primer_nombre: "Graciana",
        primer_apellido: "Castro",
        segundo_apellido: "Campoy",
        tel: "3167432078",
        correo_el: "graciana.castro108@gmail.com",
        salario: NumberDecimal("1700004.94"),
        id_hospital: 3
    },
    {
        _id: 99,
        primer_nombre: "Gala",
        primer_apellido: "Canales",
        segundo_apellido: "Olivé",
        tel: "3717144990",
        correo_el: "gala.canales897@yahoo.com",
        salario: NumberDecimal("1700003.42"),
        id_hospital: 4
    },
    {
        _id: 100,
        primer_nombre: "Andrés",
        segundo_nombre: "Heraclio",
        primer_apellido: "Montoya",
        segundo_apellido: "Conde",
        tel: "3644830020",
        correo_el: "andres.montoya530@gmail.com",
        salario: NumberDecimal("1700004.69"),
        id_hospital: 5
    },
    {
        _id: 101,
        primer_nombre: "Omar",
        primer_apellido: "Escolano",
        segundo_apellido: "Ugarte",
        tel: "3671795833",
        correo_el: "omar.escolano964@gmail.com",
        salario: NumberDecimal("1700003.68"),
        id_hospital: 1
    },
    {
        _id: 102,
        primer_nombre: "Rubén",
        primer_apellido: "Galindo",
        segundo_apellido: "Vilaplana",
        tel: "3801425030",
        correo_el: "ruben.galindo97@gmail.com",
        salario: NumberDecimal("1700002.82"),
        id_hospital: 2
    },
    {
        _id: 103,
        primer_nombre: "Benita",
        segundo_nombre: "Lupita",
        primer_apellido: "León",
        segundo_apellido: "Ricart",
        tel: "3659686235",
        correo_el: "benita.leon844@yahoo.com",
        salario: NumberDecimal("1700003.73"),
        id_hospital: 3
    },
    {
        _id: 104,
        primer_nombre: "Carmen",
        primer_apellido: "Serna",
        segundo_apellido: "Exposito",
        tel: "3090310362",
        correo_el: "carmen.serna488@yahoo.com",
        salario: NumberDecimal("1700003.43"),
        id_hospital: 4
    },
    {
        _id: 105,
        primer_nombre: "Flor",
        primer_apellido: "Lumbreras",
        segundo_apellido: "Antúnez",
        tel: "3091683883",
        correo_el: "flor.lumbreras502@gmail.com",
        salario: NumberDecimal("1700004.40"),
        id_hospital: 5
    },
    {
        _id: 106,
        primer_nombre: "Alfonso",
        primer_apellido: "Corral",
        segundo_apellido: "Gaya",
        tel: "3670514463",
        correo_el: "alfonso.corral541@yahoo.com",
        salario: NumberDecimal("1700002.75"),
        id_hospital: 1
    },
    {
        _id: 107,
        primer_nombre: "Lucía",
        primer_apellido: "Losada",
        segundo_apellido: "Aranda",
        tel: "3880211629",
        correo_el: "lucia.losada196@hotmail.com",
        salario: NumberDecimal("1700004.38"),
        id_hospital: 2
    },
    {
        _id: 108,
        primer_nombre: "Pancho",
        segundo_nombre: "Mamen",
        primer_apellido: "Vicens",
        segundo_apellido: "Busquets",
        tel: "3184171852",
        correo_el: "pancho.vicens404@yahoo.com",
        salario: NumberDecimal("1700004.95"),
        id_hospital: 3
    },
    {
        _id: 109,
        primer_nombre: "Tecla",
        primer_apellido: "Giménez",
        segundo_apellido: "Jara",
        tel: "3761233492",
        correo_el: "tecla.gimenez681@hotmail.com",
        salario: NumberDecimal("1700001.88"),
        id_hospital: 4
    },
    {
        _id: 110,
        primer_nombre: "Luz",
        primer_apellido: "Ledesma",
        segundo_apellido: "Rosselló",
        tel: "3687379470",
        correo_el: "luz.ledesma645@gmail.com",
        salario: NumberDecimal("1700002.58"),
        id_hospital: 5
    },
    {
        _id: 111,
        primer_nombre: "Josefina",
        segundo_nombre: "Cosme",
        primer_apellido: "Romeu",
        segundo_apellido: "Báez",
        tel: "3808543737",
        correo_el: "josefina.romeu289@hotmail.com",
        salario: NumberDecimal("1700003.93"),
        id_hospital: 1
    },
    {
        _id: 112,
        primer_nombre: "Jennifer",
        segundo_nombre: "Eusebio",
        primer_apellido: "Duarte",
        segundo_apellido: "Jover",
        tel: "3603936634",
        correo_el: "jennifer.duarte567@hotmail.com",
        salario: NumberDecimal("1700001.84"),
        id_hospital: 2
    },
    {
        _id: 113,
        primer_nombre: "Maximiliano",
        primer_apellido: "Alarcón",
        segundo_apellido: "Dávila",
        tel: "3214085797",
        correo_el: "maximiliano.alarcon669@hotmail.com",
        salario: NumberDecimal("1700003.28"),
        id_hospital: 3
    },
    {
        _id: 114,
        primer_nombre: "Teresa",
        segundo_nombre: "Pastora",
        primer_apellido: "Armas",
        segundo_apellido: "Mancebo",
        tel: "3392635276",
        correo_el: "teresa.armas52@hotmail.com",
        salario: NumberDecimal("1700001.93"),
        id_hospital: 4
    },
    {
        _id: 115,
        primer_nombre: "Nayara",
        segundo_nombre: "Marcelo",
        primer_apellido: "Sedano",
        segundo_apellido: "Tomás",
        tel: "3336334155",
        correo_el: "nayara.sedano496@hotmail.com",
        salario: NumberDecimal("1700004.86"),
        id_hospital: 5
    },
    {
        _id: 116,
        primer_nombre: "Pascuala",
        primer_apellido: "Cervantes",
        segundo_apellido: "Patiño",
        tel: "3269872001",
        correo_el: "pascuala.cervantes829@hotmail.com",
        salario: NumberDecimal("1700001.83"),
        id_hospital: 1
    },
    {
        _id: 117,
        primer_nombre: "Nicolasa",
        primer_apellido: "Gimeno",
        segundo_apellido: "Pol",
        tel: "3437708156",
        correo_el: "nicolasa.gimeno783@yahoo.com",
        salario: NumberDecimal("1700004.03"),
        id_hospital: 2
    },
    {
        _id: 118,
        primer_nombre: "Priscila",
        primer_apellido: "Barrios",
        segundo_apellido: "Piña",
        tel: "3274900731",
        correo_el: "priscila.barrios180@yahoo.com",
        salario: NumberDecimal("1700002.97"),
        id_hospital: 3
    },
    {
        _id: 119,
        primer_nombre: "Julián",
        primer_apellido: "Rivero",
        segundo_apellido: "Tovar",
        tel: "3171636662",
        correo_el: "julian.rivero365@yahoo.com",
        salario: NumberDecimal("1700004.92"),
        id_hospital: 4
    },
    {
        _id: 120,
        primer_nombre: "Matilde",
        segundo_nombre: "Calisto",
        primer_apellido: "Salgado",
        segundo_apellido: "Molins",
        tel: "3528266409",
        correo_el: "matilde.salgado121@hotmail.com",
        salario: NumberDecimal("1700004.18"),
        id_hospital: 5
    },
    {
        _id: 121,
        primer_nombre: "Amando",
        segundo_nombre: "Micaela",
        primer_apellido: "Briones",
        segundo_apellido: "Egea",
        tel: "3003973408",
        correo_el: "amando.briones590@hotmail.com",
        salario: NumberDecimal("1700003.54"),
        id_hospital: 1
    },
    {
        _id: 122,
        primer_nombre: "Micaela",
        segundo_nombre: "Eulalia",
        primer_apellido: "Asensio",
        segundo_apellido: "Donaire",
        tel: "3295209282",
        correo_el: "micaela.asensio200@gmail.com",
        salario: NumberDecimal("1700003.64"),
        id_hospital: 2
    },
    {
        _id: 123,
        primer_nombre: "Belén",
        segundo_nombre: "Anacleto",
        primer_apellido: "Rodríguez",
        segundo_apellido: "Escolano",
        tel: "3990604275",
        correo_el: "belen.rodriguez165@hotmail.com",
        salario: NumberDecimal("1700004.23"),
        id_hospital: 3
    },
    {
        _id: 124,
        primer_nombre: "Íñigo",
        primer_apellido: "Zabala",
        segundo_apellido: "Andrés",
        tel: "3018048350",
        correo_el: "inigo.zabala475@gmail.com",
        salario: NumberDecimal("1700003.61"),
        id_hospital: 4
    },
    {
        _id: 125,
        primer_nombre: "María",
        segundo_nombre: "Fabiola",
        primer_apellido: "Gallo",
        segundo_apellido: "Gonzalez",
        tel: "3165768736",
        correo_el: "maria.gallo802@hotmail.com",
        salario: NumberDecimal("1700002.62"),
        id_hospital: 5
    },
    {
        _id: 126,
        primer_nombre: "Máxima",
        primer_apellido: "Ariza",
        segundo_apellido: "Llabrés",
        tel: "3715705778",
        correo_el: "maxima.ariza195@yahoo.com",
        salario: NumberDecimal("1700002.12"),
        id_hospital: 1
    },
    {
        _id: 127,
        primer_nombre: "Eric",
        primer_apellido: "Ángel",
        segundo_apellido: "Lerma",
        tel: "3221397265",
        correo_el: "eric.angel723@hotmail.com",
        salario: NumberDecimal("1700001.80"),
        id_hospital: 2
    },
    {
        _id: 128,
        primer_nombre: "Dionisia",
        primer_apellido: "Losada",
        segundo_apellido: "Puente",
        tel: "3613992372",
        correo_el: "dionisia.losada571@yahoo.com",
        salario: NumberDecimal("1700004.68"),
        id_hospital: 3
    },
    {
        _id: 129,
        primer_nombre: "Jenny",
        primer_apellido: "Almeida",
        segundo_apellido: "Roura",
        tel: "3699745550",
        correo_el: "jenny.almeida573@hotmail.com",
        salario: NumberDecimal("1700003.05"),
        id_hospital: 4
    },
    {
        _id: 130,
        primer_nombre: "Rosalina",
        primer_apellido: "Colomer",
        segundo_apellido: "Blazquez",
        tel: "3461855098",
        correo_el: "rosalina.colomer357@hotmail.com",
        salario: NumberDecimal("1700002.10"),
        id_hospital: 5
    },
    {
        _id: 131,
        primer_nombre: "Amor",
        primer_apellido: "Leiva",
        segundo_apellido: "Diez",
        tel: "3364285861",
        correo_el: "amor.leiva74@hotmail.com",
        salario: NumberDecimal("1700002.92"),
        id_hospital: 1
    },
    {
        _id: 132,
        primer_nombre: "Reyes",
        primer_apellido: "Pomares",
        segundo_apellido: "Morcillo",
        tel: "3200486740",
        correo_el: "reyes.pomares495@hotmail.com",
        salario: NumberDecimal("1700002.56"),
        id_hospital: 2
    },
    {
        _id: 133,
        primer_nombre: "Vicenta",
        segundo_nombre: "Adela",
        primer_apellido: "Roda",
        segundo_apellido: "Cifuentes",
        tel: "3907571157",
        correo_el: "vicenta.roda979@yahoo.com",
        salario: NumberDecimal("1700003.12"),
        id_hospital: 3
    },
    {
        _id: 134,
        primer_nombre: "Pastor",
        segundo_nombre: "Celso",
        primer_apellido: "Ropero",
        segundo_apellido: "Villena",
        tel: "3472777214",
        correo_el: "pastor.ropero159@hotmail.com",
        salario: NumberDecimal("1700003.08"),
        id_hospital: 4
    },
    {
        _id: 135,
        primer_nombre: "Adelardo",
        primer_apellido: "Roura",
        segundo_apellido: "Verdú",
        tel: "3633832397",
        correo_el: "adelardo.roura619@hotmail.com",
        salario: NumberDecimal("1700003.54"),
        id_hospital: 5
    },
    {
        _id: 136,
        primer_nombre: "Ofelia",
        primer_apellido: "Vidal",
        segundo_apellido: "Jaume",
        tel: "3993500559",
        correo_el: "ofelia.vidal723@gmail.com",
        salario: NumberDecimal("1700002.68"),
        id_hospital: 1
    },
    {
        _id: 137,
        primer_nombre: "Araceli",
        segundo_nombre: "Encarna",
        primer_apellido: "Cabeza",
        segundo_apellido: "Paz",
        tel: "3805033999",
        correo_el: "araceli.cabeza621@gmail.com",
        salario: NumberDecimal("1700004.87"),
        id_hospital: 2
    },
    {
        _id: 138,
        primer_nombre: "Humberto",
        primer_apellido: "Ferreras",
        segundo_apellido: "Reguera",
        tel: "3209542930",
        correo_el: "humberto.ferreras969@hotmail.com",
        salario: NumberDecimal("1700003.38"),
        id_hospital: 3
    }
]);
