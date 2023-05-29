const md5 = require("md5");

const strArr = ['ham', 'ham-', 'ham-1'];

strArr.forEach(str => {
    const hashStr = md5(str);
    console.log(`hashed string is: '${hashStr}', string: '${str}'`);
});
