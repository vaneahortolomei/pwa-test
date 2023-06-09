import './style.css'

let area = document.querySelector('.input-area'),
    input = area.querySelector('.input-area__input'),
    output = area.querySelector('.input-area__output');

const debounce = (callback, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    }
};

const reverseString = (str) => {
    if (typeof str !== 'string') {
        return false;
    }

    const result = [...str].reverse().join('');

    return output.textContent = result;
};

const response = debounce(reverseString, 500);


input.addEventListener('input', (e) => response(input.value));
