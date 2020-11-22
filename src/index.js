//import {createCore} from './Core.js';
const createCore = require('./Core');

const core = createCore();

try {
    core.start();
    core.stop();
} catch (error) {
    console.log('[index] Uncaugth error!');
    console.log(error);
}