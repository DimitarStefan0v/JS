function createAssemblyLine() {
    const result = {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp += 1;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp -= 1;
                }
            }
        },
        hasAudio(player) {
            player.currentTrack = {
                    name: '',
                    artist: ''
                },
                player.nowPlaying = () => {
                    if (player.currentTrack !== null) {
                        console.log(`Now playing '${player.currentTrack.name}' by ${player.currentTrack.artist}`);
                    }
                }
        },
        hasParktronic(parktronic) {
            parktronic.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    }
    return result;
}



const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log(myCar);