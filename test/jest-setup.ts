import { SetupServer } from '@src/server';
import supertest from 'supertest';

let server: SetupServer;
beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp);
});

//afterAll(async () => await server.close());