let board =[
        ['x', 'o', 'o'],
        ['o', 'o', 'x'],
        ['o', 'x', 'x']];

for(let i=0; i<3; i++){
    if(board[i][0]== board[i][1] && board[i][1]== board[i][2]){
        console.log(board[i][0] + 'wins')
    }
    if(board[0][i]== board[1][i] && board[1][i]== board[2][i]){
        console.log(board[0][i]+ 'wins')
    }
}
if(board[0][0]== board[1][1] && board[1][1]== board[2][2]){
    console.log(board[0][0]+ 'wins')
}


if(board[0][2]== board[1][1] && board[1][1]== board[2][0]){
    console.log(board[0][2]+ 'wins')
}

// [
//     [0,0], [0,1], [0,2]
//     [1,0], [1,1], [1,2]
//     [2,0], [2,1], [2,2]
// ]
