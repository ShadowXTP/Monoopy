function updateDropdowns() {
    const firsttrait = document.getElementById('firsttrait');
    const secondtrait = document.getElementById('secondtrait');
    
    const selected1 = firsttrait.value;
    const selected2 = secondtrait.value;


    for (let option of firsttrait.options) {
        option.disabled = false;
    }

    for (let option of dropdown2.options) {
        option.disabled = false;
    }


    if (selected1) {
        secondtrait.querySelector(`option[value="${selected1}"]`).disabled = true;
    }

    if (selected2) {
        firsttrait.querySelector(`option[value="${selected2}"]`).disabled = true;
    }
    
}

