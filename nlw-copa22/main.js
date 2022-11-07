function createGame(player1,hour,player2){
  return `
    <li>
           <a href="https://www.google.com/search?q=jogos+da+copa+do+mundo+2022&oq=jogos+da+copa+do+mudn&aqs=chrome.1.69i57j0i13i512l9.9799j1j4&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer"><img src="./assets/${player1}.svg" alt="bandeira da ${player1}"></a>
                 <strong>${hour}</strong>
           <img src="./assets/${player2}.svg" alt="bandeira do ${player2}">
    </li>
  `
}

 let delay = -0.8;

function createCard(date, day, games){
  delay = delay + 0.8;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
          <ul>
             ${games}
            </ul>
  </div>
  `
}
document.querySelector("#cards").innerHTML = 
 
  createCard(
    "24/11",
    "Quinta-feira",
    createGame("suiça", "16:00", "cameroon") +
      createGame("portugal", "13:00", "ghaba") +
      createGame("brasil", "16:00", "serbia")) +
  
  createCard(
    "28/11",
    "Segunda-feira",
    createGame("korean", "10:00", "ghaba") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "urugai")) +
  
   createCard(
     "24/11",
     "Quinta-feira",
     createGame("suiça", "16:00", "cameroon") +
       createGame("portugal", "13:00", "ghaba") +
       createGame("brasil", "16:00", "serbia")) 
   
   
   
