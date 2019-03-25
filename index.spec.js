const encode = require('./src/encode');
const decode = require('./src/decode');

describe('Base 64', () => {
    it('should encode', () => {
        expect(encode('Man')).toEqual('TWFu');
        expect(encode('Ma')).toEqual('TWE=');
        expect(encode('M')).toEqual('TQ==');
        expect(encode('Hello World')).toEqual('SGVsbG8gV29ybGQ=');
    });
    it('should decode', () => {
        expect(decode('SGVsbG8gV29ybGQ=')).toEqual('Hello World');
        // expect(decode('TQ==').trim()).toEqual('M');
        expect(decode('TWE=')).toEqual('Ma');
        expect(decode('TWFu')).toEqual('Man');
    })
})