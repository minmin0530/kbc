import { roomNames } from "./roomNames";
import { staffNames } from "./staffName";
import { message } from "./message";
import { rooms } from "./rooms";

export class Room {
    static roomIndex: number = 1;
    static floorIndex: number = 0;
    static buildingIndex: number = 0;
    buttons: HTMLButtonElement[] = [];

    setTitle(index: number) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = "<h1>" +
        roomNames.buildings[Room.buildingIndex].name + " " +
        roomNames.buildings[Room.buildingIndex].floors[Room.floorIndex].name;
        if (index == -1) {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML += "</h1>";
        } else {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML +=
            roomNames.buildings[Room.buildingIndex].floors[Room.floorIndex].rooms[index].name
            + "</h1>";    
        }
    }

    setRooms() {        
        Room.roomIndex = 0;
        for (const room of roomNames.buildings[Room.buildingIndex].floors[Room.floorIndex].rooms) {
            const button: HTMLButtonElement = document.createElement("button");
            button.textContent = room.name;
            this.buttons.push(button);
            document.querySelector<HTMLDivElement>('#app')!.appendChild(button);

            // Roomを継承したclassを呼び出している。
            rooms[room.index].set(button); // 各部屋それぞれ別の処理（振る舞い）をする。

            Room.roomIndex += 1;
        }
    }

    setStaff(rate: number) {
        for (const staff of staffNames) {
            if (Math.random() < rate) {
                const button: HTMLButtonElement = document.createElement("button");
                button.textContent = staff + "先生";
                button.style.background = "limegreen";
                this.buttons.push(button);
                document.querySelector<HTMLDivElement>('#app')!.appendChild(button);

                button.addEventListener("click", () => {
                    const br: HTMLBRElement = document.createElement("br");
                    const div: HTMLButtonElement = document.createElement("button");
                    div.textContent = message[ Math.floor(message.length * Math.random()) ];
                    document.querySelector<HTMLDivElement>('#app')!.appendChild(br);
                    document.querySelector<HTMLDivElement>('#app')!.appendChild(div);
                    if (div.textContent == "おめでとう！ゲームクリアです🎉") {
                        this.gameClear(returnButton);
                    }
                });
            }
        }
        const returnButton: HTMLButtonElement = document.createElement("button");
        returnButton.textContent = "戻る";
        document.querySelector<HTMLDivElement>('#app')!.appendChild(returnButton);
        returnButton.addEventListener("click", () => {
            this.setTitle(-1);
            this.setRooms();
        });

    }

    gameClear(returnButton: HTMLButtonElement) {
        for (const b of this.buttons) {
            b.disabled = true;
        }
        returnButton.textContent = "ゲーム終了";
        returnButton.style.background = "pink";
        returnButton.addEventListener("click", () => {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML = "<h1>🎉ゲームクリア🎉</h1>";
        });
    }

    set(button: HTMLButtonElement) {
        const roomIndex = Room.roomIndex;
        button.addEventListener("click", () => {
            this.setTitle(roomIndex);
            this.setStaff(0.03);
        });
    } 
}