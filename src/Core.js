const createDatabaseConnection = require('./Database');
const createWebserver = require('./Webserver');

function createCore(configurations = {}){

    console.log('createCore')
    const database = configurations.database || createDatabaseConnection();
    const webserver = configurations.webserver || createWebserver();

    function start(){
        console.log('> [core] Starting...');
        database.start();
        webserver.start();
        console.log('> [core] Starting done! System running!');
    }

    function stop(){
        console.log('> [core] Stopping');
        webserver.stop();
        database.stop();
        console.log('> [core] Stopping done!');
    }

    return {
        start,
        stop
    }
}

module.exports = createCore;