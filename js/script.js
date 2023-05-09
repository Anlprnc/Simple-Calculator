let display = document.querySelector("#screen");

const wipe = () => {
    display.value = "";
}

const show = (x) => {
    display.value += x;
}

const calc = () => {
    display.value = eval(display.value);
}