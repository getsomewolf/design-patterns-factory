import createCore from './modules/core.js';

const core = createCore();

try {
    core.start();
    setTimeout(() => {
        core.stop();        
    }, 2000);
} catch (error) {
    console.log('[index] Uncaught exception');
    console.error(error);
}