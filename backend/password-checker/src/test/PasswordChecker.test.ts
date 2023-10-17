
import { PasswordChecker } from "../app/PasswordChecker";
describe("PassowrdChecker test suide", () => {
  let SUT: PasswordChecker;

  beforeEach(() => {
    SUT = new PasswordChecker();
  });

  it("should return true", () => {
    const result = SUT.checkPassword();
    expect(result).toBe(true);
  });
});