import { default as Moves } from "./rover.js";
import { default as Cordinates } from "./cordinates.js";

export default class Start {
  constructor() {
    this.position = "";
    this.x = 0;
    this.y = 0;
  }

  readCommands(commands, position, landingPositionX, landingPositionY) {
    const commandsarray = commands.split("");
    const movement = new Moves();
    const cordinates = new Cordinates();
    this.position = position;

    for (const command of commandsarray) {
      if (command.includes("R")) {
        const newPosition = movement.execute(command, this.position);
        this.position = newPosition;
      }
      if (command.includes("L")) {
        const newPosition = movement.execute(command, this.position);
        this.position = newPosition;
      }
      if (command.includes("M")) {
        const coordinatesMove = cordinates.move(this.position, landingPositionX, landingPositionY);
        console.log(coordinatesMove.x + ":" + coordinatesMove.y + ":" + this.position);
      }
    }
  }
}
