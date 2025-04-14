import { formatDuration } from './duration';

test('formats seconds', () => {
    expect(formatDuration(33)).toBe('33s');
  });