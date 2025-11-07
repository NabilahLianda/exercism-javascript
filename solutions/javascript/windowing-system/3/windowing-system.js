// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width, height) {
    this.setWidth(width);
    this.setHeight(height);
  }

  resize(newWidth, newHeight) {
    newWidth && this.setWidth(newWidth);
    newHeight && this.setHeight(newHeight);
  }

  setWidth(width = 80) {
    this.width = Math.max(width, 1);
  }

  setHeight(height = 60) {
    this.height = Math.max(height, 1);
  }
}

export class Position {
  constructor(x , y) {
    this.setX(x);
    this.setY(y)
  }

  setX(x = 0) {
    this.x = Math.max(x, 0);
  }

  setY(y = 0) {
    this.y = Math.max(y, 0);
  }

  move(newX, newY) {
    this.setX(newX);
    this.setY(newY)
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    const {width, height} = size;
    const x = this.checkResizeWidth(width);
    const y = this.checkResizeHeight(height);

    this.size.resize(x, y);
  }

  checkResizeWidth(width) {
    const screenWidth = this.screenSize.width;
    const positionX = this.position.x;
    const isOvershot = positionX + width > screenWidth;
    
    return isOvershot ? screenWidth - positionX : width;
  }

  checkResizeHeight(height) {
    const screenHeight = this.screenSize.height;
    const positionY = this.position.y;
    const isOvershot = positionY + height > screenHeight;
    
    return isOvershot ? screenHeight - positionY : height;
  }

  move(position) {
    const {x, y} = position;
    const newX = this.checkMoveX(x)
    const newY = this.checkMoveY(y);

    this.position.move(newX, newY);
  }

  checkMoveX(x) {
    const screenWidth = this.screenSize.width;
    const width = this.size.width;
    const isOvershot = width + x > screenWidth;

    return isOvershot ? screenWidth - width : x;
  }

  checkMoveY(y) {
    const screenHeight = this.screenSize.height;
    const height = this.size.height;
    const isOvershot = height + y > screenHeight;

    return isOvershot ? screenHeight - height : y;
  }
} 


export function changeWindow(programWindow) {
  const size = new Size(400, 300);
  const position = new Position(100, 150);
  programWindow.resize(size);
  programWindow.move(position);
  
  return programWindow;
}