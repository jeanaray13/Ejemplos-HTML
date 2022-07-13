var estudiantes = [{nombre:'Jean',ira:30}, {nombre:'Manuel',ira:20},{nombre:'José',ira:40}]

const lista1 = estudiantes.filter(function(e){if(e.ira>30){return e;}});
console.log(lista1);
console.log();
const lista2 = estudiantes.map(function(e){e.nombre=e.nombre.toUpperCase(); return e;});
console.log(lista2);