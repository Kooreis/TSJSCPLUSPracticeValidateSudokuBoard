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