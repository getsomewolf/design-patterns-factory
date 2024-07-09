function createDatabase() {
    function start() { 
        console.log("Database creation started.");
        console.log("Database creation completed.");
    }

    /* throw new Error("Database creation failed"); */
    
    function stop() {
        console.log("Database creation stopped.");        
    }

    return {
        start, 
        stop
    }
}

export default createDatabase;