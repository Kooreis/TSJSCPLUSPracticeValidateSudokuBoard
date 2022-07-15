```cpp
#include <iostream>
#include <vector>

using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    int rows[9][9] = {0}, cols[9][9] = {0}, boxes[9][9] = {0};

    for(int i = 0; i < board.size(); i++) {
        for(int j = 0; j < board[i].size(); j++) {
            if(board[i][j] != '.') {
                int num = board[i][j] - '0' - 1, k = i / 3 * 3 + j / 3;
                if(rows[i][num] || cols[j][num] || boxes[k][num])
                    return false;
                rows[i][num] = cols[j][num] = boxes[k][num] = 1;
            }
        }
    }

    return true;
}

int main() {
    vector<vector<char>> board = {
        {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
        {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
        {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
        {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
        {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
        {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
        {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
        {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
        {'.', '.', '.', '.', '8', '.', '.', '7', '9'}
    };

    if(isValidSudoku(board))
        cout << "The Sudoku board is valid." << endl;
    else
        cout << "The Sudoku board is not valid." << endl;

    return 0;
}
```