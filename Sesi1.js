tugas1A();
tugas1B();
tugas1C();
tugas1D();

function tugas1A() {
    const n = 1000;
    const a = 0;
    const b = 999;

    const jumlah = (n/2) * (a + b);
    console.log(jumlah);
}

function tugas1B() {
    const n = 10;  
    const a = 3;   
    const b = n + 1;

    const jumlah = (n / 2) * (a + b);
    console.log(jumlah);
}

function tugas1C() {
    const n = 10;  
    let jumlah = 0;

    for (let i = 3; i <= n + 1; i++) {
    jumlah += i;
}

console.log(jumlah);
}

function tugas1D() {
    const n = 5;  // Misalnya, n adalah 5
    let jumlah = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    jumlah += i * j;
  }
}

console.log(jumlah);

}