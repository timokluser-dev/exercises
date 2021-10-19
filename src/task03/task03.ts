export class Anagram {
    /**
     * info: ignores case sensitivity
     * @param word the comparing word
     * @param words list of words to test
     * @returns all anagrams
     */
    getAnagrams(word: string, words: string[]): string[] {
        return words.filter(value => this.isAnagram(word.toLowerCase(), value.toLowerCase()));
    }

    /**
     * 
     * @param word the comparing word
     * @param wordToTest the word to test for an anagram
     * @returns if is anagram
     */
    private isAnagram(word: string, wordToTest: string): boolean {
        if (word === wordToTest) return false;

        return this.areEqual(Array.from(word), Array.from(wordToTest));
    }

    /**
     * 
     * @param arrayOne first array
     * @param arrayTwo second array
     * @returns if both are equal
     */
    private areEqual(arrayOne: string[], arrayTwo: string[]): boolean {
        if (arrayOne.length !== arrayTwo.length) return false;

        arrayOne = arrayOne.sort();
        arrayTwo = arrayTwo.sort();
        const sharedChars = arrayOne.filter((element, index) => element === arrayTwo[index]);

        return sharedChars.length === arrayTwo.length;
    }
}
