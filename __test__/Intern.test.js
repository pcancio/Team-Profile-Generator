const { expect } = require('@jest/globals')

const Intern = require('.../lib/Intern.js');

test('can instantiate Intern instance', () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = "Adam";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name  via getName()', () => {
    const testValue = "Adam";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Intern("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('Can get id via getID()', () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});
test('Can get role via getRole()', () => {
    const testValue = "Engineer";
    const e = new Intern("Foo", 2, testValue);
    expect(e.getRole()).toBe(testValue);
});
test('Can get school via getSchool()', () => {
    const testValue = "Columbia";
    const e = new Intern("Foo", 3, testValue);
    expect(e.getSchool()).toBe(testValue);
});