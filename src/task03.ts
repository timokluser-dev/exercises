export class Anagram {
    /**
     * info: ignores case sensitivity
     * @param word the comparing word
     * @param words list of words to test
     * @returns all anagrams
     */
    getAnagrams(word: string, words: string[]): string[] {
        const anagrams = words.filter(value => this.isAnagram(word.toLowerCase(), value.toLowerCase()));
        return anagrams;
    }

    /**
     * 
     * @param word the comparing word
     * @param wordToTest the word to test for an anagram
     * @returns if is anagram
     */
    private isAnagram(word: string, wordToTest: string): boolean {
        if (word.length != wordToTest.length || word == wordToTest) return false;

        let wordToTestRemainingChars = Array.from(wordToTest);

        Array.from(word).forEach(char => {
            const indexOfChar = wordToTestRemainingChars.indexOf(char);
            const wordToTestContainsChar = indexOfChar != -1;
            
            if (wordToTestContainsChar) {
                // remove from remaining chars
                wordToTestRemainingChars.splice(indexOfChar, 1);
            } else {
                return false;
            }
        });

        return wordToTestRemainingChars.length == 0;
    }
}
