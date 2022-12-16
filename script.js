//your code here
var gameNumber = document.getElementById("game-number")
var playBtn = document.getElementById("play-game")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var computerC = document.getElementById("computer-choose")
var computerC1 = document.getElementById("computer-choose-1")
var roundResult = document.getElementById("round-result")
var roundResult1 = document.getElementById("round-result-1")
var userP = document.getElementById("user-points")
var computerP = document.getElementById("computer-points")
var roundsLeft = document.getElementById("rounds-left")
var gameResult = document.getElementById("game-result")
var userP1 = document.getElementById("user-points-1")
var computerP1 = document.getElementById("computer-points-1")
var roundsLeft1 = document.getElementById("rounds-left-1")




var userPoints = 0;
var computerPoints = 0;
var RR = " ";

function play() {
    if (gameNumber.value > 0) {
        console.log("yes")
        rock.style.display = "inline-block"
        paper.style.display = "inline-block"
        scissors.style.display = "inline-block"
        computerC.style.display = "block"
        roundResult.style.display = "block"
        userP.style.display = "block"
        computerP.style.display = "block"
        roundsLeft.style.display = "block"
        // computerC1.innerText = "  " + randomComputerChoose
        roundsLeft1.innerText = "  " + gameNumber.value
        userP1.innerText = "  " + userPoints
        computerP1.innerText = "  " + computerPoints
        // roundResult1.innerText = "  " + RR


        function rockR() {
            var choices = ["rock", "paper", "scissors"]
            var computerChoose = Math.floor(Math.random() * choices.length)
            var randomComputerChoose = choices[computerChoose]
            if (randomComputerChoose == 'rock') {
                RR = 'tie'
            }
            else if (randomComputerChoose == 'paper') {
                RR = 'Computer Won'
                computerPoints++
            }
            else {
                RR = "You Won"
                userPoints++
            }
            computerC1.innerText = "  " + randomComputerChoose
            roundResult1.innerText = "  " + RR
            userP1.innerText = "  " + userPoints
            computerP1.innerText = "  " + computerPoints
            gameNumber.value --
            roundsLeft1.innerText = "  " + gameNumber.value
            if(gameNumber.value == 0){
                gameResult.style.display = "block"
                if(computerPoints>userPoints){
                    gameResult.innerText = "Game Result: Computer Won"
                }
                else if(userPoints>computerPoints){
                    gameResult.innerText = "Game Result: User Won"
                }
                else{
                    gameResult.innerText = "Game Result: Tie"
                }
            }
            
        }

        rock.onclick = rockR;

        function paperP() {
            var choices = ["rock", "paper", "scissors"]
            var computerChoose = Math.floor(Math.random() * choices.length)
            var randomComputerChoose = choices[computerChoose]
            if (randomComputerChoose == 'rock') {
                RR = 'You Won'
                userPoints++
            }
            else if (randomComputerChoose == 'paper') {
                RR = 'Tie'
            }
            else {
                RR = "Computer Won"
                computerPoints++
            }
            computerC1.innerText = "  " + randomComputerChoose
            roundResult1.innerText = "  " + RR
            userP1.innerText = "  " + userPoints
            computerP1.innerText = "  " + computerPoints
            gameNumber.value --
            roundsLeft1.innerText = "  " + gameNumber.value
            if(gameNumber.value == 0){
                gameResult.style.display = "block"
                if(computerPoints>userPoints){
                    gameResult.innerText = "Game Result: Computer Won"
                }
                else if(userPoints>computerPoints){
                    gameResult.innerText = "Game Result: User Won"
                }
                else{
                    gameResult.innerText = "Game Result: Tie"
                }
            }
            
        }

        paper.onclick = paperP;

        function scissorsS() {
            var choices = ["rock", "paper", "scissors"]
            var computerChoose = Math.floor(Math.random() * choices.length)
            var randomComputerChoose = choices[computerChoose]
            if (randomComputerChoose == 'paper') {
                RR = 'You Won'
                userPoints++
            }
            else if (randomComputerChoose == 'scissors') {
                RR = 'Tie'
            }
            else {
                RR = "Computer Won"
                computerPoints++
            }
            computerC1.innerText = "  " + randomComputerChoose
            roundResult1.innerText = "  " + RR
            userP1.innerText = "  " + userPoints
            computerP1.innerText = "  " + computerPoints
            gameNumber.value --
            roundsLeft1.innerText = "  " + gameNumber.value
            if(gameNumber.value == 0){
                gameResult.style.display = "block"
                if(computerPoints>userPoints){
                    gameResult.innerText = "Game Result: Computer Won"
                }
                else if(userPoints>computerPoints){
                    gameResult.innerText = "Game Result: User Won"
                }
                else{
                    gameResult.innerText = "Game Result: Tie"
                }
            }
            
        }

        scissors.onclick = scissorsS;
    }
}

playBtn.onclick = play;














