import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
    test('calculates points for input', () => {
      expect(calcPoints('3 20 1 17 2 4')).toBe(85);
    });
  });
  