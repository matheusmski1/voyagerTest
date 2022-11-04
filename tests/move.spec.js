import Moves from '../rover'
import { default as Cordinates } from "../cordinates.js";

describe('Name of the group', () => {
    const move = new Moves()   
    const cordinate = new Cordinates(); 
    it('should rotate right', async () => {
        expect(move.execute("RRRRRRR"))
    });

    it("should rotate left", async () => {
        expect(move.execute("LLLLL"));
    });

    it("should move", async () => {
      expect(cordinate.move("N", "0", "0"));
    });
});