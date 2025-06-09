function topKFrequent(words: string[], k: number): string[] {
  // Step 1: Count the frequency of each word
  const freqMap = {};
  for (const word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  // Step 2: Convert the map to an array and sort it
  const sortedWords = Object.keys(freqMap).sort((a, b) => {
    const freqA = freqMap[a];
    const freqB = freqMap[b];
    
    // First sort by frequency (descending)
    if (freqA !== freqB) {
      return freqB - freqA;
    }
    
    // If frequencies are equal, sort lexicographically (ascending)
    return a.localeCompare(b);
  });

  // Step 3: Return the top k elements
  return sortedWords.slice(0, k);
}
