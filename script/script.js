let td = document.querySelectorAll("td"),
    indicator = true,
    arr = [],
    j = 0;
function addValue() {
    let x = this;
    if (indicator) {
        this.innerHTML = "X";
        this.style.color = "#18c808";
        j += 1;
        addToArray(x);
        if (j >= 5 && (arr[0] || arr[4] || arr[8])) {
            lookCoincidence(indicator);
        }
        indicator = false;
    } else {
        this.innerHTML = "O";
        this.style.color = "#c80214";
        j += 1;
        addToArray(x);
        if (j >= 6) {
            lookCoincidence(indicator);
        }
        indicator = true;
    }
    this.removeEventListener('click', addValue);
}

td.forEach((item) => {
    item.addEventListener('click', addValue)
});

function addToArray(a) {
    let index = [].indexOf.call(td, a);
    arr[index] = indicator;
}

function lookCoincidence(i) {
    if ((arr[0] === i && arr[1] === i && arr[2] === i) || (arr[0] === i && arr[3] === i && arr[6] === i) || (arr[0] === i && arr[4] === i && arr[8] === i) || (arr[1] === i && arr[4] === i && arr[7] === i) || (arr[2] === i && arr[4] === i && arr[6] === i) || (arr[2] === i && arr[5] === i && arr[8] === i) || (arr[3] === i && arr[4] === i && arr[5] === i) || (arr[6] === i && arr[7] === i && arr[8] === i)) {
        td.forEach((item) => {
            item.removeEventListener('click', addValue);
        });
        setTimeout(function () {
            alert("you win");
            location.reload();
        }, 50);

    } else if (j === 9){
        setTimeout(function () {
            alert("no one's");
            location.reload();
        }, 50);
    }
}
