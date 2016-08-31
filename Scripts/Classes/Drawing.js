export class Drawing{
  static drawImage(imageLocation, xPos,yPos,target){
    console.log(target);
      const imgObj = new Image;
      imgObj.src = imageLocation;
      imgObj.addEventListener('load',function(){
        console.log(imgObj);
        target.drawImage(imgObj,xPos,yPos)
      })

  }
}
