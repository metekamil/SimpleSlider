
 
var gameIdx=0; 
var games=["Street Fighter","Shinobi"];
var gamesImg=["http://console.com.ua/images/stories/greview/sf4walk/street-fighter-4-all.jpg","http://fc02.deviantart.net/fs71/f/2012/106/0/a/hotsuma_from_shinobi_by_mcflight-d4wg60u.jpg"];
  
function setGame(){
 
     var game=document.getElementById("gameImg");
     game.src =gamesImg[gameIdx];
    
}

function nextGame()
{ 
    gameIdx++; 
    if (gameIdx>=2) {
        gameIdx=0; 
    }
    setGame();
}