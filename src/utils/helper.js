function randomNumber(maxNum) {
    return Math.floor((maxNum * Math.random()) + 1);
}

function randomRgbaColor() {
    var r = randomNumber(256),
        g = randomNumber(256),
        b = randomNumber(256);

    return `rgba(${r}, ${g}, ${b}, 0.342)`;
}

export default randomRgbaColor ;