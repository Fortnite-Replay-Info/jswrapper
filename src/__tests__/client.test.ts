import { Client } from '../index';
test('Client', () => {
    const client = new Client('test');
    expect(client).toBeInstanceOf(Client);
    expect(client.getTournaments).toBeInstanceOf(Function);
});