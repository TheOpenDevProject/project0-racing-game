import {RacingGame} from '../Classes/RacingGame'
//Execute Code As Soon As Script Is Parsed
(function(){
console.log("function run ");
//Once DOM is loaded we run our game
window.addEventListener('load',() => {
  console.log("DOM Loaded");
  const game = new RacingGame();
  game.startGame();
});


})();
