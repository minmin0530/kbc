import { Room } from "../room";

export class StepUp extends Room {
    constructor() {
        super();
    }
    set(button: HTMLButtonElement) {
        button.addEventListener("click", () => {
            Room.floorIndex += 1;
            this.setTitle(-1);
            this.setRooms();
        });
    }
}