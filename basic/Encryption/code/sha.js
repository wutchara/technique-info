const crypto = require("crypto");
const algorithm = "sha256";
var salts = ["ham-test", "ham-test2"];
console.log(`algorithm: ${algorithm}`);

const strArr = ['ham', 'ham-', 'ham-1'];

salts.forEach(salt => {
    console.log(`salt: ${salt}`);
    strArr.forEach(str => {
        const hash = crypto.createHmac(algorithm, salt);
        hash.update(str)
        const myHash = hash.digest('hex');
        console.log(`hashed string is: '${myHash}', string: '${str}'`);
    });
    console.log('===========');
});
