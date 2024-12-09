const createGameBtn = document.getElementById("create-button");
const joinGameBtn = document.getElementById("join-button");
const loadingElement = document.getElementById("loading");
let gameCode = "";

const setGameCode = async (code) => {
    gameCode = code.id;
}

const getGameCode = () => {
    return gameCode;
}

const createGame = async () => {
    console.log("Creating game...");
    
    // Show the loading spinner
    loadingElement.style.display = 'flex';

    try {
        const response = await fetch('https://card-simulator.onrender.com/game-create');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        await setGameCode(json);
    } catch (error) {
        console.log(error);
    } finally {
        // Hide the loading spinner after the request completes (either success or failure)
        loadingElement.style.display = 'none';
        localStorage.setItem("gameCode", getGameCode());
        location.assign("Create/index.html");
    }
}

const joinGame = async () => {
    location.assign("Join/index.html");
}

createGameBtn.addEventListener("click", createGame);
joinGameBtn.addEventListener("click", joinGame);
