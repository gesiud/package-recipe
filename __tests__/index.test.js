describe("index.js", () => {
  it("funkcja greet zwraca  Witaj świecie", () => {
    const greet = require("../src/index");

    expect(greet()).toBe("Witaj MARSIE KURWA!");
  });
});
