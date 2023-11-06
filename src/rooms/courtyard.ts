import { Room } from "../room";

export class Courtyard extends Room {
    constructor() {
        super();
    }
    set(button: HTMLButtonElement) {
        const roomIndex = Room.roomIndex;
        button.addEventListener("click", () => {
            if (Room.buildingIndex == 0) {
                Room.buildingIndex = 1;
            } else {
                Room.buildingIndex = 0;
            }
            this.setTitle(roomIndex);
            this.setRooms();
            this.setStaff(0.05);
        });
    }
}