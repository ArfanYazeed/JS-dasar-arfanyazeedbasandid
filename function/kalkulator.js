function tambah(a,b){
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil} `);
}
function kurang(a,b){
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil} `);
}
function kali(a,b){
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil} `);
}
function bagi(a,b){
    hasil = a / b;
    alert(`${a} / ${b} = ${hasil} `);
}
 

let x = Number(prompt("Masukan angka!"));
let operator = (prompt("Masukan operator!"));
let y = Number(prompt("Masukan angka!"));

if (operator == '+'){
    tambah(x,y)
    alert("Hasil " + (a+b))
}else if (operator == '-'){
    kurang(x,y)
    alert("Hasil " + (a-b))
}else if (operator == '*'){
    kali(x,y)
    alert("Hasil " + (a*b))
}else if(operator == '/'){
    bagi(x,y)
    alert("Hasil " + (a/b))
}else {
    alert("ERROR Tolong Masukan Angka!")
}
