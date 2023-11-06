import { Room } from "../room";

export class Breezeway extends Room {
    constructor() {
        super();
    }
    set (button: HTMLButtonElement) {
        button.addEventListener("click", () => {
            if (Room.buildingIndex == 0) {
                Room.buildingIndex = 1;
            } else {
                Room.buildingIndex = 0;
            }
            this.setTitle(-1);
            this.setRooms();
        });
    }
}