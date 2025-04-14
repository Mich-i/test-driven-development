export function isValid(isbn: string): boolean {
  if (isbn.length !== 13 || !/^\d+$/.test(isbn)) { // habe regex benutzt für zu sehen wenn es nicht nur aus Ziffern wöre
    return false
  }

  const digits = isbn.split('').map(Number); 

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += (i % 2 === 0) ? digits[i] : digits[i] * 3;
  }

  const checksum = (10 - (sum % 10)) % 10;

  return checksum === digits[12];
}
