const ws = require('ws');

module.exports.websockets = (expressServer) => {
    const webSocketServer = new ws.Server({ 
        path: '/web-socket',
        noServer: true
    });

    webSocketServer.on('connection', (socket) => {
        socket.on('message', message => {
            console.log(message.toString('utf8'))
            socket.send(JSON.stringify({
                message: message.toString('utf8'),
            }));
            socket.send('hi from server');
        });

        socket.on('close', () => {
            console.log('closed');
        });
    });

    /**
     * handshake 
     */
    expressServer.on('upgrade', (request, socket, head) => {
        webSocketServer.handleUpgrade(request, socket, head, (websocket) => {
            webSocketServer.emit('connection', websocket, request);
        });
    });
    return webSocketServer;
} 
