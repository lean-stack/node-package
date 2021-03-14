const greet = require('./greet');

describe('greet function', () => {
  it('greets given name', () => {
    const greeting = greet('Micha');
    expect(greeting).toBe('Hello Micha');
  });

  it('greets the world if name is missing', () => {
    const greeting = greet();
    expect(greeting).toBe('Hello World');
  });
});
