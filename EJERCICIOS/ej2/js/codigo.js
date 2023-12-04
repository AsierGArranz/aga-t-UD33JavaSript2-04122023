var vregexNaix = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

let fecha = prompt('introduce fecha dd/mm/yyyy')

console.log(vregexNaix.test(fecha))

emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,3}$/i;

let correo = prompt('introduce correo electronico [test@test.com]')

console.log(emailRegex.test(correo))

let nombre = prompt('introduce un nombre y un apellido')
reverseName = nombre.split(" ").reverse().join(" ").replace(/(\S+)(\s+|$)/g, '$1,')
console.log(reverseName)
