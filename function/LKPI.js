//....1.luas segitiga....//
// let alas = parseFloat(prompt("Masukan alas segitiga"));
// let tinggi = parseFloat(prompt("Masukan alas tinggi"));

// function luasSegitiga(a,t){
//     let luas = a*t/2;
//     alert(luas);
// }
// luasSegitiga(alas,tinggi);

//....2.keliling lingkaran....//
// let jari = Number(prompt("Masukan Keliling lingkaran"));

// function kelilingLingkaran(r){
//     let jari = 2*3.14*r;
//     alert(jari);
// }
// kelilingLingkaran(jari);

//.... 3. bilangan prima....//
// function isprime(x) {

//     if (x <= 1) return false;
//     if (x <= 3) return true;
//     if (x % 2 === 0 || x % 3 === 0) return false;

//     for (let i = 5; i * i <= x; i += 6) {
//         if (x % i === 0 || x %  (i + 2 ) === 0) return false;
//     }
//     return true
// }
// const x = parseInt(prompt("masukkan bilangan positif: "));
// if (isprime(x)) {
//     alert(`${x} adalah bilangan prima`);
// } else {
//     alert(`${x} bukan bilangan prima`);
// }
