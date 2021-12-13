const { expect } = require('@jest/globals')

const Manager = require('../lib/Manager.js');

test('can instantiate Employee instance', () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = "Adam";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name  via getName()', () => {
    const testValue = "Adam";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Manager("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('Can get id via getID()', () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});
test('Can get role via getRole()', () => {
    ``
    const testValue = "Manager";
    const e = new Manager("Foo", 2, testValue);
    expect(e.getRole()).toBe(testValue);
});
test('Can get office number via getNumber()', () => {
    const testValue = 100;
    const e = new Manager("Foo", 3, "Bla", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});