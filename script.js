let board = ['','','','','','','','','']
let playerDaVez = "X"
const playerTurn = document.querySelector("#playerTurn")
const winsXTxt = document.querySelector("#winsX")
const winsOTxt = document.querySelector("#winsO")
const area_game = document.querySelector("#area-game")
const area_settings = document.querySelector("#settings")
const btnBack = document.querySelector("#btnBack")
const btnConfig = document.querySelector("#btnConfig")

let winsX = 0
let winsO = 0


function makeMove(index) {
    console.log(board)
    if (board[index] == '') {
        board[index] = playerDaVez
        document.querySelectorAll(".btnGame")[index].innerHTML = playerDaVez
        playerDaVez = playerDaVez == "X" ? "O" : "X"
        playerTurn.innerHTML = playerDaVez
        console.log(board)
        checkWinner()
    }
}

function checkWinner(){

    let winCombinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let combinacao of winCombinacoes) {
        let [a, b, c] = combinacao

        if (board[a] && board[b] === board[a] && board[c] === board[a]) {
            alert(`O vencedor é: ${board[a]}`)
            board[a] === "X" ? winsX++ : winsO++
            winsOTxt.innerHTML = winsO
            winsXTxt.innerHTML = winsX
            board = ['','','','','','','','','']
            playerDaVez = "X"
            playerTurn.innerHTML = playerDaVez
            document.querySelectorAll(".btnGame").forEach(btn => {
                btn.innerHTML = ''
            })
        }
    }

    if (!board.includes('')) {
        alert("Empatou")
        gameOver = true
        resetGame()
    }
}

function resetGame() {
    board = ['','','','','','','','','']
    playerDaVez = "X"
    playerTurn.innerHTML = playerDaVez
    document.querySelectorAll(".btnGame").forEach(btn => {
        btn.innerHTML = ''
    })
    winsO = winsX = 0
    winsOTxt.innerHTML = winsO
    winsXTxt.innerHTML = winsX
}

function settings() {
    area_game.style.display = "none"
    area_settings.style.display = "flex"
    btnBack.style.display = "block"
    btnConfig.style.display = "none"
}

function back() {
    area_game.style.display = "flex"
    area_settings.style.display = "none"
    btnBack.style.display = "none"
    btnConfig.style.display = "Block"
}