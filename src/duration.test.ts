import { formatDuration } from './duration';

test('formats seconds', () => {
    expect(formatDuration(33)).toBe('33s');
  });
  
  test('formats minutes and seconds', () => {
    expect(formatDuration(123)).toBe('2m3s');
  });

  test('formats more minutes and seconds', () => {
    expect(formatDuration(500)).toBe('8m20s');
  });
  
  test('formats full hour', () => {
    expect(formatDuration(3600)).toBe('1h');
  });
  