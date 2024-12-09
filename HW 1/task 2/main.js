const decimalNumInput = document.querySelector('#num'),
      binaryNumOutput = document.querySelector('.output__field');

decimalNumInput.addEventListener('input', () => {
    binaryNumOutput.innerText = toBinary(decimalNumInput.value);
});

function toBinary(num) {
    let binaryNum = '';
    while (num > 0) {
        binaryNum = num % 2 + binaryNum;
        num = Math.floor(num / 2);
    }
    return +binaryNum || 0;
}
