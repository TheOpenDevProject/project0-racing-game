import {RacingGame} from './Classes/RacingGame'
//Execute Code As Soon As Script Is Parsed
(function(){

//Once DOM is loaded we run our game
document.addEventListener('load',() => {
  const game = new RacingGame();
  game.startGame();
});


}());
