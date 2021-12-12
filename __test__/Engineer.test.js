const Engineer = require('../lib/Engineer.js')

test('can instantiate Engineer instance', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = "Adam";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Engineer("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name  via getName()', () => {
    const testValue = "Adam";
    const e = new Engineer(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('Can get id via getID()', () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});
test('Can get role via getRole()', () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 2, testValue);
    expect(e.getRole()).toBe(testValue);
});
test('Can get github via getGithub()', () => {
    const testValue = 'git@github.com';
    const e = new Engineer("Foo", 3, testValue);
    expect(e.getGithub()).toBe(testValue);
});