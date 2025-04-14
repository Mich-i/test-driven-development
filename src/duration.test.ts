import { formatDuration } from './duration';

test('formats seconds', () => {
    expect(formatDuration(33)).toBe('33s');
  });
  
  test('formats minutes and seconds', () => {
    expect(formatDuration(123)).toBe('2m3s');
  });