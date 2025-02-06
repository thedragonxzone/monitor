if (window.Worker) {
    const worker = new Worker("worker.js");

    worker.onmessage = function(event) {
        if (event.data.found) {
            console.log("✅ Słowo 'Migrating' znalezione!");
            sendNotification("✅ Słowo 'Migrating' znalezione!");
        }
    };

    function sendNotification(message) {
        if (Notification.permission === "granted") {
            new Notification("Monitorowanie strony", { body: message });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Monitorowanie strony", { body: message });
                }
            });
        }
    }
} else {
    console.log("❌ Twoja przeglądarka nie obsługuje Web Worker.");
}
