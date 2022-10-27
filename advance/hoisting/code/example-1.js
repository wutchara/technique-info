function hoist() {
    a = 20;
    var b = 100;
}

hoist();

console.log('aaaaaa', a); // 20
console.log('bbbbbbb', b); // error