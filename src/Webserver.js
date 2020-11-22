function createWebserver(){

    function start(){
        console.log('> [webserver] Starting ...');
        console.log('> [webserver] Waiting for port to be available...');

        //ToDo criar modulo para express async/await
        const app = require('./config/CustomExpress');
        app.listen(3333, () => console.log('Rodando'));

        console.log('> [webserver] Starting done!');
    }

    function stop(){
        console.log('> [webserver] Stopping...');
        console.log('> [webserver] Gracefully waiting for all clients...');
        console.log('> [webserver] Closing all ports...');
        console.log('> [webserver] Stopping done!');
    }

    return {
        start,
        stop
    }
}

module.exports = createWebserver;