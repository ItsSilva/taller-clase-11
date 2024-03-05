const nom = prompt ("Ingrese su nombre");
const apellido = prompt ("Ingrese su apellido");
const añoDeNacimiento = parseInt (prompt("Ingrese su año de nacimiento"));
const calcularEdad = 2024 - añoDeNacimiento;
const diaDeNacimiento = prompt ("Ingrese su día de nacimiento");
const mesDeNacimiento = prompt ("Ingrese su mes de nacimiento");
console.log ("Mi nombre es", nom, apellido, "mi edad es", calcularEdad, "años y nací el", diaDeNacimiento, "de", mesDeNacimiento, "de", añoDeNacimiento);
