/**
 * Example of Web Socket
 */

const express = require('express');
const expressWs = require('express-ws');
const bodyP = require('body-parser');
const path = require('path');

var app = express();
var appWs = expressWs(app);

/********************************************/

//WEB SOCKET

app.ws("/chat", function (ws, req) {

    ws.on('message', function (message) {
        //create socket here
        console.log(">> ", message);

    });
    ws.on('open', function () {
        console.log('WS: Connection opened');
    });
    ws.on('close', function () {
        console.log('WS: Connection closed');
    });
    ws.on('error', function () {
        console.log('WS: An Error has occured..');
    });
})

/********************************************/

app.use(bodyP.json());
app.use(bodyP.urlencoded({ extended: true }));

/********************************************/

//MAIN APP

/********************************************/

//default app
app.use(
    express.static(path.join(__dirname, '../public/chatroom'))
);

//for bower components
app.use(
    '/bower', 
    express.static(path.join(__dirname, '../bower_components'))
)

const port = process.env.NODE_PORT || 3000;

app.listen(port, function () {
    console.log('app started on port: ' + port + ' at', new Date);
})