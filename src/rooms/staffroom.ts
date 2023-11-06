import { Room } from "../room";

export class StaffRoom extends Room {
    constructor() {
        super();
    }
    set(button: HTMLButtonElement) {
        const roomIndex = Room.roomIndex;
        button.addEventListener("click", () => {
            this.setTitle(roomIndex);
            this.setStaff(0.2);
        });
    }
}