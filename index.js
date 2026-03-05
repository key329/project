let counter = 0;
let cps = 0;
let upgrades = [];
let upgradelist = "";

function updateCounter() {
    counter = Math.round(counter);
    document.querySelector(".counter").innerHTML = "Counter: " + counter;
    document.querySelector(".cps").innerHTML = "Per Second: " + cps;
    listUpgrades() 
    document.querySelector(".upgrades").innerHTML = "Upgrades: " + upgradelist;
}

function listUpgrades() {
    upgradelist = "";
    for (let i = 0; i < upgrades.length; i++) { 
        upgradelist = upgradelist + upgrades[i] + ", ";
    }
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
        autoclicktier1();
        upgrades.push("Autoclick Tier 1");document.querySelector("#autoclicktier1").style.display = "none";
    } else {
        alert("Not enough!");
    }
}

//t2 counter//
async function autoclicktier2() {
    cps = cps + 2;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (500);
    }
}

function buyAutoclickTier2() {
    if (counter >= 250) {
        counter = counter - 250;
        autoclicktier2();
        document.querySelector("#autoclicktier2").style.display = "none";
        upgrades.push("Autoclick Tier 2");
    } else {
        alert("Not enough!");
    }
}

//t3 counter//
async function autoclicktier3() {
    cps = cps + 7;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (142);
    }
}

function buyAutoclickTier3() {
    if (counter >= 500) {
        counter = counter - 500;
        autoclicktier3();
        document.querySelector("#autoclicktier3").style.display = "none";
        upgrades.push("Autoclick Tier 3");
    } else {
        alert("Not enough!");
    }
}

//t4 counter//
async function autoclicktier4() {
    cps = cps + 15;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (66);
    }
}

function buyAutoclickTier4() {
    if (counter >= 1000) {
        counter = counter - 1000;
        autoclicktier4();
        document.querySelector("#autoclicktier4").style.display = "none";
        upgrades.push("Autoclick Tier 4");
    } else {
        alert("Not enough!");
    }
}

//multiplier stuff//
async function multiplier2x() {
    cps = cps;
    counter = counter * 2;
    updateCounter()

}

function buyMultiplier2x() {
    if (counter >= 100) {
        counter = counter - 100;
        multiplier();
        updateCounter();
        document.querySelector("#multiplier2x").style.display = "none";
        
    } else {
        alert("Not enough!");
    }
}

//multiplier 1.1//
async function multiplier11x() {
    cps = cps;
    counter = counter * 1.1;
    updateCounter()

}

function buyMultiplier11x() {
    if (counter >= 250) {
        counter = counter - 250;
        multiplier11x();
        updateCounter();
    } else {
        alert("Not enough!");
    }
}


//function that sets up delay/wait for the cooldown, returns the delay//
function cooldown(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
