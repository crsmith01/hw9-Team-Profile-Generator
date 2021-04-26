// Import Manager class
const Manager = require('../lib/Manager');

// describe('', () => {
//     it('', () => {
//         expect(new Employee().);
//     })
// });

test("Can set office number via constructor", () => {
    const testValue = "OfficeNumber";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com",);
    expect(e.getRole()).toBe(testValue);
});
  