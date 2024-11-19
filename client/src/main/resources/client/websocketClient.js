let socket;

function initWebSocket() {
    // Open a WebSocket connection to your NIO server
    socket = new WebSocket("ws://localhost:8080/your-endpoint"); // Update with your server's WebSocket URL

    socket.onopen = function() {
        console.log("WebSocket connection established");
    };

    socket.onmessage = function(event) {
        console.log("Message from server:", event.data);
        // Handle server response (e.g., unlock buttons, update UI)
    };

    socket.onclose = function() {
        console.log("WebSocket connection closed");
    };

    socket.onerror = function(error) {
        console.log("WebSocket error:", error);
    };
}

// Function to send data to the server
function sendToServer(data) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(data); // Send data as a JSON string
    } else {
        console.log("WebSocket is not open");
    }
}

// Initialize WebSocket connection
initWebSocket();