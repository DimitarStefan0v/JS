function calc(steps, length, speed){
    let metersPerSecond = speed * 1000 / 3600;
    let distance = steps * length;
    let rest = Math.floor(distance / 500);
    let time = distance / metersPerSecond + (rest * 60);
    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    const minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    const seconds = (time % 60).toFixed(0).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

console.log(calc(4000, 0.60, 5));
console.log(calc(2564, 0.70, 5.5));