const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');

const buttons = document.querySelectorAll('.select button');

const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

const MatchResult = document.getElementById('MatchResult');

const ComputerClass = ['fa fa-hand-rock-o fa-4x', 'fa fa-hand-paper-o fa-4x', 'fa fa-hand-scissors-o fa-4x'];

var playerScore = 1;
var computerScore = 1;

const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e)=> 
        {
            showIcon.className = e.target.className;

            let randomNumber = Math.floor(Math.random() * ComputerClass.length);
            computerShowIcon.className = ComputerClass[randomNumber];

            if(showIcon.className === computerShowIcon.className)
            {
                //pScore.innerHTML = pScore.innerHTML;
                //cScore.innerHTML = cScore.innerHTML;
                MatchResult.innerHTML = "It's a Tie ! ";
                MatchResult.style.color = 'orange';
            }
            else if(showIcon.className === ComputerClass[0] && computerShowIcon.className === ComputerClass[2])
            {
                pScore.innerHTML = playerScore;
                playerScore++;
                MatchResult.innerHTML = "It's a Win ! ";
                MatchResult.style.color = 'green';
            }
            else if(showIcon.className === ComputerClass[0] && computerShowIcon.className === ComputerClass[1]){
                cScore.innerHTML = computerScore;
                computerScore++;
                MatchResult.innerHTML = "You Loosed ! ";
                MatchResult.style.color = 'red';
            }
            else if(showIcon.className === ComputerClass[1] && computerShowIcon.className === ComputerClass[2]){
                cScore.innerHTML = computerScore;
                computerScore++;
                MatchResult.innerHTML = "You Loosed ! ";
                MatchResult.style.color = 'red';
            }
            else if(showIcon.className === ComputerClass[1] && computerShowIcon.className === ComputerClass[0]){
                pScore.innerHTML = playerScore;
                playerScore++;
                MatchResult.innerHTML = "It's a Win ! ";
                MatchResult.style.color = 'green';
            }
            else if(showIcon.className === ComputerClass[2] && computerShowIcon.className === ComputerClass[0]){
                cScore.innerHTML = computerScore;
                computerScore++;
                MatchResult.innerHTML = "You Loosed ! ";
                MatchResult.style.color = 'red';
            }
            else if(showIcon.className === ComputerClass[2] && computerShowIcon.className === ComputerClass[1]){
                pScore.innerHTML = playerScore;
                playerScore++;
                MatchResult.innerHTML = "It's a Win ! ";
                MatchResult.style.color = 'green';
            }
        });
    });
}