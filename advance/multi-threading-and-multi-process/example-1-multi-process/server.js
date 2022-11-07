const {
    fork
} = require('child_process');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/endpoint', (request, response) => {
    // fork another process
    const process = fork('./send_mail.js');
    console.log('request.body', request.body);
    const mails = request.body?.emails || 'test-email';
    // send list of e-mails to forked process
    process.send({
        mails
    });
    // listen for messages from forked process
    process.on('message', (message) => {
        console.log('server.js', `Number of mails sent ${message.counter}`);
    });
    return response.json({
        status: true,
        sent: true
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})