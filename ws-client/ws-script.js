window.addEventListener('DOMContentLoaded', () => {
    const wsClient = new WebSocket('ws://localhost:3001/web-socket');
    const sendButton = document.getElementById('submit');
    const input = document.getElementById('input');

    wsClient.addEventListener('open', () => {
        console.log('WebSocket Client Connected');
    });

    sendButton.addEventListener('click', () => {
        console.log('WebSocket Client Connected', input.value);
        wsClient.send(input.value)
    });

    wsClient.addEventListener('message', (message) => {
        console.log('WebSocket message', message);
    });
});
