let counter = 0;
let cps = 0;

function updateCounter() {
    document.querySelector(".counter").innerHTML = "Counter: " + counter;
    document.querySelector(".cps").innerHTML = "Per Second: " + cps;
}

async function counterclick() {
    counter ++;
    updateCounter()
}

//t1 counter//
async function autoclicktier1() {
    cps = cps + 1;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (1000);
    }
}

function buyAutoclickTier1() {
    if (counter >= 20) {
        counter = counter - 20;
        counterauto();
        document.querySelector("#autoclicktier1").style.display = "none";
    } else {
        alert("Not enough!");
    }
}

//multiplier stuff//
async function multiplier() {
    cps = cps;
    counter = counter * 2;
    updateCounter()

}

function buyMultiplier() {
    if (counter >= 100) {
        counter = counter - 100;
        multiplier();
        updateCounter();
        document.querySelector("#multiplier").style.display = "none";
        
    } else {
        alert("Not enough!");
    }
}

//function that sets up delay/wait for the cooldown, returns the delay//
function cooldown(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
