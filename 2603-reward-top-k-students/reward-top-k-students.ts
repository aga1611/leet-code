function topStudents(positive_feedback: string[], negative_feedback: string[], report: string[], student_id: number[], k: number): number[] {
    // object scores to store each student’s ID as the key and their calculated score as the value.
    const scores: { [key: number]: number } = {};

    // We convert the feedback arrays to Sets.
    // Sets allow faster lookups (O(1) time complexity) compared to arrays (O(n)).
    const posSet = new Set(positive_feedback);
    const negSet = new Set(negative_feedback);

    // loop to process every student
    for (let i = 0; i < student_id.length; i++) {
        // initialize score at 0
        let score = 0;
        // split the report into individual words
        const words = report[i].split(' ');
        // Loop through each word in the student's report.
        for (const word of words) {
            // calcualte scores;
            if (posSet.has(word)) score += 3;
            if (negSet.has(word)) score -= 1;
        }
        // store the score using the student's ID as the key
        scores[student_id[i]] = score;
    }

    return student_id
        // Sort the student IDs (the original array):
        .sort((a, b) => {
            // First by score in descending order.
            const diff = scores[b] - scores[a];
            // If scores are the same, break the tie by sorting student IDs in ascending order.
            return diff !== 0 ? diff : a - b;
        })
        // return only the top k student IDs.
        .slice(0, k);
};