export class RacingGame{
  constructor(){
    this.player1carImage = "http://rlv.zcache.com/sports_car_cutout-r416d3d66db574d74b2820d1e141c5ee3_x7saw_8byvr_324.jpg";
    this.player2carImage = "http://rlv.zcache.com/1959_retro_black_cutout-r3a9a0c3f0e934ea5ad725cb50c0e666b_x7sai_8byvr_324.jpg";
    this.bindevents({
        "type": "click",
        "elemId": "game-start",
        "callback": () => {

        }
    }, {
        "type": "click",
        "elemId": "game-start",
        "callback": () => {

        }
    });
}


  startGame(){

  }

  *getNextGamePrompt(){
      yield "Ready?";
      yield "Set...";
      yield "GO!";
  }

  bindEvents(...events){
    for(event in events){
        //Clean way of hooking up events
        let elem = document.getElementById(event.elemId);
        elem.addEventListener(event.type,event.callback);
    }
  }

  getCanvasContext(){

  }

}
