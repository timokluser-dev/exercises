import { PrimeNumber } from './task06';

describe('Test primes', () => {
    it('test prime 2', () => {
        const primeNumber = new PrimeNumber();
        const result = primeNumber.isPrime(2);
        expect(result).toEqual(true);
    });

    it('test prime 3', () => {
        const primeNumber = new PrimeNumber();
        const result = primeNumber.isPrime(3);
        expect(result).toEqual(true);
    });

    it('test zero', () => {
        const primeNumber = new PrimeNumber();
        const result = primeNumber.isPrime(0);
        expect(result).toEqual(false);
    });

    it('test non prime', () => {
        const primeNumber = new PrimeNumber();
        const result = primeNumber.isPrime(12);
        expect(result).toEqual(false);
    });

    it('test range', () => {
        const primeNumber = new PrimeNumber();
        const result = primeNumber.getPrimes(7, 20)
        expect(result).toEqual([7, 11, 13, 17, 19]);
    });
});
