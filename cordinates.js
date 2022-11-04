export default class Cordinates {
  constructor() {
    (this.x = 0), (this.y = 0), (this.maxWidth = 10), (this.maxHeight = 10);
  }

  move(direction, landingPositionX, landingPositionY) {
    this.x = landingPositionX;
    this.y = landingPositionY;

    if (direction.includes("N")) {
      this.y + (1 % this.maxHeight);
    }
    if (direction.includes("E")) {
      this.x + (1 % this.maxWidth);
    }
    if (direction.includes("W")) {
      this.x > 0 ? this.x - 1 : this.maxWidth - 1;
    }
    if (direction.includes("S")) {
      this.y > 0 ? this.y - 1 : this.maxHeight - 1;
    }

    return { x: this.x, y: this.y };
  }
}
