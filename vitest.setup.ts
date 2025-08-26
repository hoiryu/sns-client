import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '~src/mocks/http';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
