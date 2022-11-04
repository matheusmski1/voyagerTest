export default class Rover {
  constructor() {
    this.direction = "";
    this.position = "";
  }
  execute(commands, position) {
    for (var i = 0; i < commands.length; i++) {
      if (commands.includes("R")) {
        this.direction = this.rotateRight(position);
      } else if (commands.includes("L")) {
        this.direction = this.rotateLeft(position);
      } else {
        return "N";
      }
    }
    this.position = this.direction;
    return this.position;
  }
  
  rotateRight(position) {
    if (position === "N") {
      return (this.direction = "E");
    } else if (position === "E") {
      return (this.direction = "S");
    } else if (position === "S") {
      return (this.direction = "W");
    } else if (position === "W") {
      return (this.direction = "N");
    }
  }

  rotateLeft(position) {
    if (position === "N") {
      return (this.direction = "W");
    } else if (position === "W") {
      return (this.direction = "S");
    } else if (position === "S") {
      return (this.direction = "E");
    } else if (position === "E") {
      return (this.direction = "N");
    }
  }
}
