Here is a JavaScript solution for the problem:

```javascript
function isValidSudoku(board) {
    let rows = new Array(9).fill(null).map(() => new Set());
    let columns = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
                    return false;
                }

                rows[i].add(num);
                columns[j].add(num);
                boxes[boxIndex].add(num);
            }
        }
    }

    return true;
}

let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board));
```

This console application checks if a given Sudoku board is valid according to the rules. It uses three sets to keep track of the numbers in each row, column, and 3x3 box. If a number is already present in the corresponding set, it returns false. If it successfully checks all numbers, it returns true. The board is hardcoded in the application, but you can replace it with any other 9x9 array.