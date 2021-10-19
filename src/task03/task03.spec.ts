import { Anagram } from './task03';

describe('Test anagrams', () => {
    it('test "listen"', () => {
        const anagram = new Anagram();
        const word = 'listen';
        const words = ['google', 'inlets', 'banana', 'silent'];
        const result = anagram.getAnagrams(word, words);
        expect(result).toEqual(['inlets', 'silent']);
    });

    it('test same letters', () => {
        const anagram = new Anagram();
        const word = 'hello';
        const words = ['olleh'];
        const result = anagram.getAnagrams(word, words);
        expect(result).toEqual(['olleh']);
    });

    it('test word in list', () => {
        const anagram = new Anagram();
        const word = 'listen';
        const words = ['listen'];
        const result = anagram.getAnagrams(word, words);
        expect(result).toEqual([]);
    });

    it('test case insensitive', () => {
        const anagram = new Anagram();
        const word = 'Listen';
        const words = ['silent'];
        const result = anagram.getAnagrams(word, words);
        expect(result).toEqual(['silent']);
    });

    it('test no match', () => {
        const anagram = new Anagram();
        const word = 'hello';
        const words = ['google', 'inlets', 'banana'];
        const result = anagram.getAnagrams(word, words);
        expect(result).toEqual([]);
    });
});
