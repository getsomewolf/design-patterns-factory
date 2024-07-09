import createConnection from "./webserver.js";
import createDatabase from "./database.js";

function createCore(configurations = {}) {
    const webServer = configurations.webserver || createConnection();
    const database = configurations.database || createDatabase();

    function start() {
        console.log("System started.");
        webServer.start();
        database.start();                
    }

    function stop() {
        console.log("System stopped.");
        webServer.stop();
        database.stop();                
    }
    
    return {
        start,
        stop
    }
}

export default createCore;