
function createConnection() {
    
    function start() { 
        console.log("Connection creation started.");
        console.log(`Port ${Math.random()}`);              
    }
    
    function stop() {
        console.log("Connection creation stopped.");        
    }

    return {
        start, 
        stop
    }
}

export default createConnection;