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
  
  test('formats complex hour-minute-second', () => {
    expect(formatDuration(3999)).toBe('1h6m39s');
  });
  
  test('formats zero seconds', () => {
    expect(formatDuration(0)).toBe('0s');
  });
  
  test('throws error for negative seconds', () => {
    expect(() => formatDuration(-5)).toThrow('Seconds cannot be negative');
  });
  
  test('rounds seconds correctly', () => {
    expect(formatDuration(2.8)).toBe('3s');
  })