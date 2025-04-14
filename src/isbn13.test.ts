import { isValid } from './isbn13';

describe('isValid - ISBN validation', () => {
    test('valid ISBN-13 returns true', () => {
        expect(isValid('9780306406157')).toBe(true);
      });
    
      test('invalid ISBN-13 returns false', () => {
        expect(isValid('9780306406158')).toBe(false);
      });
    
      test('ISBN with letters returns false', () => {
        expect(isValid('97803A6406157')).toBe(false);
      });
    
      test('ISBN that is too short returns false', () => {
        expect(isValid('978030640615')).toBe(false);
      });
    
      test('ISBN that is too long returns false', () => {
        expect(isValid('97803064061577')).toBe(false);
      });
});