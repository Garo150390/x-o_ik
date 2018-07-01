let td = document.querySelectorAll("td"),
    indicator = true,
    arr = [];

td.forEach((item) => {
    item.addEventListener('click', function () {
        let x = this;
        if (indicator) {
            this.innerHTML = "X";
            this.style.pointerEvents = "none";
            addToArray(x);
            lookCoincidence(indicator);
            indicator = false;
        } else {
            this.innerHTML = "O";
            this.style.pointerEvents = "none";
            addToArray(x);
            lookCoincidence(indicator);
            indicator = true;
        }
    })
});

function addToArray(a) {
    let index = [].indexOf.call(td, a);
    arr[index] = indicator;
}

function lookCoincidence(i) {
    if ((arr[0] === i && arr[1] === i && arr[2] === i) || (arr[0] === i && arr[3] === i && arr[6] === i) || (arr[0] === i && arr[4] === i && arr[8] === i) || (arr[1] === i && arr[4] === i && arr[7] === i) || (arr[2] === i && arr[4] === i && arr[6] === i) || (arr[2] === i && arr[5] === i && arr[8] === i) || (arr[3] === i && arr[4] === i && arr[5] === i) || (arr[6] === i && arr[7] === i && arr[8] === i)) {
        alert("you win");
        location.reload()
    }
}
