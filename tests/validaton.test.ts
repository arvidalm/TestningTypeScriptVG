import { validateEmail, validateZipCode, validatePersonalNumber, validateText } from '../validation';

describe('Validation functions', () => {
  it('should validate email correctly', () => {
    expect(validateEmail('emailvalid@gmail.com')).toBe(true);
    expect(validateEmail('emailinvalid@')).toBe(false);
  });

  it('should validate zip code correctly', () => {
    expect(validateZipCode('54322')).toBe(true);
    expect(validateZipCode('CBA35')).toBe(false);
  });

  it('should validate personal number correctly', () => {
    expect(validatePersonalNumber('123456-6580')).toBe(true);
    expect(validatePersonalNumber('54321')).toBe(false);
  });

  it('should validate text correctly', () => {
    expect(validateText('Text valid')).toBe(true);
  });
});
