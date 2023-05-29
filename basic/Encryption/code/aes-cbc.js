const crypto = require("crypto");

// CBC(Cipher Block Chaining)
const algorithm = "aes-256-cbc";
const initVector = crypto.randomBytes(16);
const messages = ["Hello Ja", "Hello Ja.....12345678", "Hello Ja", "Hello Ja.....12345678...............Hello Ja"];
const key = crypto.randomBytes(32);

const encript = (msg) => {
    const cipher = crypto.createCipheriv(algorithm, key, initVector);

    let encryptedData = cipher.update(msg, "utf-8", "hex");
    console.log('encryptedData', encryptedData);
    encryptedData += cipher.final("hex");

    return encryptedData;
};

const decript = (msg) => {
    const decipher = crypto.createDecipheriv(algorithm, key, initVector);

    let decryptedData = decipher.update(msg, "hex", "utf-8");
    decryptedData += decipher.final("utf8");

    return decryptedData;
};

const showMessage = (message) => {
    console.log(`Message: '${message}'`);
    const enMessage = encript(message);
    console.log(`Encrypted message: '${enMessage}'`);
    console.log(`Decrypted message: '${decript(enMessage)}'`);
};

messages.forEach(message => {
    showMessage(message);
    console.log('---------');
});