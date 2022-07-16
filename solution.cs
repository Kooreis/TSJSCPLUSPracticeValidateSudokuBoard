function isValidSudoku(board) {
    let rows = new Array(9).fill(null).map(() => new Set());
    let columns = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());
}