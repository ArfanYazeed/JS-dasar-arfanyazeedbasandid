let x = Number(prompt("Masukan angka!"));
let operator = (prompt("Masukan operator!"));
let y = Number(prompt("Masukan angka!"));

if (operator == '+'){
    alert("Hasil " + (x+y))
}else if (operator == '-'){
    alert("Hasil " + (x-y))
}else if (operator == '*'){
    alert("Hasil " + (x*y))
}else if(operator == '/'){
    alert("Hasil " + (x/y))
}else {
    alert("ERROR Tolong Masukan Angka!")
}
