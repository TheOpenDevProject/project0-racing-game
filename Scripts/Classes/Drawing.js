export class Drawing{
  static drawImage(imageLocation, xPos,yPos,width,height,target){
    console.log(target);
      const imgObj = new Image;
      imgObj.src = imageLocation;
      imgObj.width = `${width}px`;
      imgObj.height = height;
      imgObj.addEventListener('load',function(){
        console.log(imgObj);
        target.drawImage(imgObj,xPos,yPos)
      })
  }

  static drawSolidRect(xPos,yPos,width,height,target){
    target.fillRect(xPos,yPos,width,height);
  }
}
