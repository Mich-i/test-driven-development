import { isValid } from './isbn13';

describe('isValid - ISBN validation', () => {
    test('valid ISBN returns true', () => {
        expect(isValid('9780306406157')).toBe(true);
    });
});