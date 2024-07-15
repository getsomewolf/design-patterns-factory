import createCore from "../modules/core.js";
 

function createMock() {
    function start() { 
        console.log("Mock system started.");
    };

    function stop() {
        console.log("Mock system stopped.");
    };

    return {
        start,
        stop
    }
}

describe('Core quando Importado', () => {
    test('Deve ter o método start e stop', () => {
        const core = createCore();
        expect(typeof core.start).toBe('function');
        expect(typeof core.stop).toBe('function');
    });
});

describe('Core quando inicializado', () => {
    test('nao deve retornar erros', () => {
        const databaseMock = createMock();
        const webServerMock = createCore();

        const core = createCore({ database: databaseMock, webServer: webServerMock});

        expect(() => core.start()).not.toThrow();
        expect(() => core.stop()).not.toThrow();
    })
})