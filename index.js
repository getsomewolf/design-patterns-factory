import createCore from './core.js';

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