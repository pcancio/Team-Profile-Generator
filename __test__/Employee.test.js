const { expect } = require('@jest/globals')

const Employee = require('../lib/Employee.js')

test('can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = "Adam";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name  via getName()', () => {
    const testValue = "Adam";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('Can get id via getID()', () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});