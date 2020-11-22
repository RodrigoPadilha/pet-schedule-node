//const app = require('./config/CustomExpress');
//app.listen(3333, ()=> console.log('Rodando'));





const createCore = require('./Core');

const core = createCore();

try {
    core.start();
    //core.stop();
} catch (error) {
    console.log('[index] Uncaugth error!');
    console.log(error);
}
