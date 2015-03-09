
 
var gameIdx=0; 
var games=["Street Fighter","Shinobi","Call of Duty"];
var gamesImg=["http://console.com.ua/images/stories/greview/sf4walk/street-fighter-4-all.jpg","http://gearnuke.com/wp-content/uploads/2014/07/Call-of-Duty-Advanced-Warfare-feature-image-3.jpg","http://fc02.deviantart.net/fs71/f/2012/106/0/a/hotsuma_from_shinobi_by_mcflight-d4wg60u.jpg"];
  
function setGame(){
 
     var game=document.getElementById("gameImg");
     game.src =gamesImg[gameIdx];
    
}

function changeSlider(step)
{ 
    gameIdx=gameIdx+step; 
    if (gameIdx>=games.length) {
        gameIdx=0; 
    }
    else{ 
    	if (gameIdx<0) {
        gameIdx=games.length-1; 
    	}
	}
    setGame();
}