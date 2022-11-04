import { default as Start } from "./start.js";

import promptSync from "prompt-sync";

Rover();

function Rover() {
  const prompt = promptSync();
  const start = new Start;
  const position = prompt("tell me your cardial position: ")
  const landingPositionX = prompt("tell me your landing position X: ")
  const landingPositionY = prompt("tell me your landing position Y: ");
  const commands = prompt("Commands: ");

  return start.readCommands(commands, position, landingPositionX, landingPositionY);
}
