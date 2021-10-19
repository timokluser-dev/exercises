export class PrimeNumber {
    getPrimes(start: number, end: number): number[] {
        let primes = new Array<number>();

        for (let i = start; i <= end; i++) {
            this.isPrime(i) && primes.push(i);
        }

        return primes;
    }

    isPrime(num: number): boolean {
        if (num < 2) return false;

        for (let i = 2; i < num; i++) {
            if (num % i == 0) return false;
        }

        return true;
    }
}
