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
