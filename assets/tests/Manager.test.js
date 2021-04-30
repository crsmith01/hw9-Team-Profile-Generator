// Import Manager class
const Manager = require('../lib/Manager');
  
test("Can set office number via constructor", () => {
    // should this be a string of just a number?
    const testValue = "24601";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com",);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via officeNum()", () => {
    // should this be a string of just a number?
    const testValue = "24601";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNum()).toBe(testValue);
});