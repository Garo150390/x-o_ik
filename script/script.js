let td = document.querySelectorAll("td"),
    indicator = true,
    arr = [],
    j = 0;

td.forEach((item) => {
    item.addEventListener('click', function () {
        let x = this;
        if (indicator) {
            this.innerHTML = "X";
            this.style.color = "#18c808";
            this.style.pointerEvents = "none";
            j += 1;
            addToArray(x);
            lookCoincidence(indicator);
            indicator = false;
        } else {
            this.innerHTML = "O";
            this.style.color = "#c80214";
            this.style.pointerEvents = "none";
            j += 1;
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
