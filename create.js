const usernameInput = document.getElementById("username");
const maxPlayersInput = document.getElementById("maximumPlayers");
const gameCodeText = document.getElementById("join-code");
const loadingElement = document.getElementById("loading");
const user = document.getElementById("user");
const createGameBtn = document.getElementById("create-button");

let username = "";
let maxPlayers = 6;

gameCodeText.innerText = localStorage.getItem("gameCode");
loadingElement.style.display = 'none';

const startGame = (e) => {
    console.log('starting game...');
    socket.emit('startGame');
}

const updateUsername = (e) => {
    username = e.target.value;
    user.innerText = username;
}

usernameInput.addEventListener('input', updateUsername);

createGameBtn.addEventListener('mousedown', startGame);

maxPlayersInput.addEventListener('input', (e) => {
    maxPlayers = e.target.value;    
});

socket.emit("joinRoom", localStorage.getItem("gameCode"));