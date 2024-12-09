const joinGameBtn = document.getElementById("join-button")



const joinGame = async () => {
    console.log("Joining game...");
    try {
        const response = await fetch('https://card-simulator.onrender.com/user-create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, isHost: 0 })
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    } finally {

    }
}


joinGameBtn.addEventListener("mousedown", joinGame);