import { Room } from "./room";
import { Courtyard } from "./rooms/Courtyard";
import { Breezeway } from "./rooms/breezeway";
import { StaffRoom } from "./rooms/staffroom";
import { StepDown } from "./rooms/stepdown";
import { StepUp } from "./rooms/stepup";

export const rooms: Room[] = [
    new StepUp(),
    new StepDown(),
    new Breezeway(),
    new Courtyard(),
    new StaffRoom(),
    new Room()
];