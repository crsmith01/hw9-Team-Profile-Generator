// Import Intern class
const Intern = require('../lib/Intern');

// describe('', () => {
//     it('', () => {
//         expect(new Employee().);
//     })
// });

test("Can set school name  via constructor", () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "SchoolName");
    expect(e.getRole()).toBe(testValue);
});
  
test("Can get school name via getSchool()", () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});