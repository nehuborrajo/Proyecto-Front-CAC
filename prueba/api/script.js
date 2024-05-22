// obtenemos el elemento HTML con el id "lista-peliculas" y lo guardamos en una variable
//const listaPeliculas = document.getElementById("detalle-juegos");
const gameList = document.querySelector("#lista-juegos");
const gamedList = document.querySelector("#detalle-juegos");

const APIKEY = "dd0cb657282b4652bae4dca7224dd6b1";
const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;
const urlg = 'https://api.rawg.io/api/games/{326243}?key=${APIKEY}';


const getPlatformStr = (platforms) => {
    const platformStr = platforms.map(pl => pl.platform.name).join(", ");
    if (platformStr.length > 30) {
        return platformStr.substring(0, 30) + "...";
    }
    return platformStr;
}



function loadGames(url){
    //loaderEl.classList.remove("loaded");
    
    // Fetch recently released games from RAWG API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //nextGameListUrl = data.next ? data.next : null;
            const games = data.results.slice(0, 5);
            var arr1 = ["326243", "452638", "704634", "685577", "372576"];
            let pos = arr1.indexOf("326243");
            console.log(pos)
    
            games.forEach(game => {
                const gameItemEl = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="item">
                        <a href=><img src="${game.background_image}" alt="${game.name} image"></a>
                        
                            <h4 class="game-name">${game.name}<br><span class="platforms">
                            ${getPlatformStr(game.parent_platforms)}</span></h4>
                            <ul>
                            <li><i class="fa fa-star"></i> <span class="rating">${game.rating}</span></li>
                                <li><i class="fa-regular fa-calendar"></i> <span class="date">${game.released}</span></li>
                                <li>${game.id}</li>
                                </ul>
                        </div>
                </div>
                `
                gameList.insertAdjacentHTML("beforeend", gameItemEl)
            });
            /*loaderEl.classList.add("loaded");
            if (nextGameListUrl) {
                loadMoreGamesBtn.classList.remove("hidden");
            } else {
                loadMoreGamesBtn.classList.add("hidden");
            }*/
            
            console.log(data.results.slice(0, 5))
            console.log(arr1)
            console.log(games)
        })
        
        .catch(error => {
            console.log("An error occurred:", error);
        });
}

function loadGame(urlg){
    //loaderEl.classList.remove("loaded");
    
    // Fetch recently released games from RAWG API
    fetch(urlg)
        .then(response => response.json())
        .then(data => {
            const gamesd = data;
    
            const gamedItemEl = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="item">
                        <a href=><img src="${game.background_image}" alt="${game.name} image"></a>
                        
                            <h4 class="game-name">${game.name}<br><span class="platforms">
                            ${getPlatformStr(game.parent_platforms)}</span></h4>
                            <ul>
                            <li><i class="fa fa-star"></i> <span class="rating">${game.rating}</span></li>
                                <li><i class="fa-regular fa-calendar"></i> <span class="date">${game.released}</span></li>
                                <li>${game.id}</li>
                                </ul>
                        </div>
                </div>
                `
                gamedList.insertAdjacentHTML("beforeend", gamedItemEl);
            /*loaderEl.classList.add("loaded");
            if (nextGameListUrl) {
                loadMoreGamesBtn.classList.remove("hidden");
            } else {
                loadMoreGamesBtn.classList.add("hidden");
            }*/
            
            console.log(gamesd)
        })
        
        .catch(error => {
            console.log("An error occurred:", error);
        });
}

loadGame(urlg);

// load games
loadGames(url);

/*loadMoreGamesBtn.addEventListener("click", ()=>{
    if(nextGameListUrl){
        loadGames(nextGameListUrl);
    }
})*/
