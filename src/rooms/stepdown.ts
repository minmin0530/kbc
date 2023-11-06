import { Room } from "../room";

export class StepDown extends Room {
    constructor() {
        super();
    }
    set(button: HTMLButtonElement) {
        button.addEventListener("click", () => {
            Room.floorIndex -= 1;
            this.setTitle(-1);
            this.setRooms();    
        });
    }
}