Here is a TypeScript console application that validates a Sudoku board:

```typescript
class SudokuValidator {
    board: number[][];

    constructor(board: number[][]) {
        this.board = board;
    }

    isValidSudoku(): boolean {
        for (let i = 0; i < 9; i++) {
            if (!this.isValidRow(i) || !this.isValidColumn(i)) {
                return false;
            }
        }

        for (let row = 0; row <= 6; row += 3) {
            for (let col = 0; col <= 6; col += 3) {
                if (!this.isValidBox(row, col)) {
                    return false;
                }
            }
        }

        return true;
    }

    isValidRow(row: number): boolean {
        let digits = new Set<number>();
        for (let col = 0; col < 9; col++) {
            if (this.board[row][col] !== 0) {
                if (digits.has(this.board[row][col])) {
                    return false;
                }
                digits.add(this.board[row][col]);
            }
        }
        return true;
    }

    isValidColumn(col: number): boolean {
        let digits = new Set<number>();
        for (let row = 0; row < 9; row++) {
            if (this.board[row][col] !== 0) {
                if (digits.has(this.board[row][col])) {
                    return false;
                }
                digits.add(this.board[row][col]);
            }
        }
        return true;
    }

    isValidBox(startRow: number, startCol: number): boolean {
        let digits = new Set<number>();
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                let cur = this.board[row + startRow][col + startCol];
                if (cur !== 0) {
                    if (digits.has(cur)) {
                        return false;
                    }
                    digits.add(cur);
                }
            }
        }
        return true;
    }
}

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let validator = new SudokuValidator(board);
console.log(validator.isValidSudoku() ? "Valid" : "Invalid");
```

This program creates a `SudokuValidator` class that takes a Sudoku board as a 2D array of numbers. It has methods to validate rows, columns, and 3x3 boxes according to Sudoku rules. The `isValidSudoku` method checks all rows, columns, and boxes and returns `true` if they are all valid, `false` otherwise. The program then creates a `SudokuValidator` instance with a sample board and prints whether the board is valid or not.