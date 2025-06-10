function isValidSudoku(board: string[][]): boolean {
    // arrays to help us keep track of what we have seen already
    const rows = new Array(9).fill(0).map(() => new Set<string>());
    const cols = new Array(9).fill(0).map(() => new Set<string>());
    const boxes = new Array(9).fill(0).map(() => new Set<string>());
    
    // loop trhough every cell
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            // get the value
            const val = board[r][c];
            // skip empty cells
            if (val === '.') continue;

            // Check for Duplicate in Row
            if (rows[r].has(val)) return false;
            rows[r].add(val);

            // Check for Duplicate in Column
            if (cols[c].has(val)) return false;
            cols[c].add(val);

            // calculate which box we are in
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

             // Check for Duplicate in 3 x 3 box
            if (boxes[boxIndex].has(val)) return false;
            boxes[boxIndex].add(val);
        }
    }
    return true
};