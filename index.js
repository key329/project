let counter = 499990;
let cps = 0;
let upgrades = [];
let upgradelist = "";
let multiplieruses = 0;

function updateCounter() {
    counter = Math.round(counter);
    document.querySelector(".counter").innerHTML = "Counter: " + counter;
    document.querySelector(".cps").innerHTML = "Per Second: " + cps;
    listUpgrades() 
    document.querySelector(".upgrades").innerHTML = "Upgrades: " + upgradelist;
    document.querySelector(".multiplieruses").innerHTML = "Multiplier Uses: " + multiplieruses;
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

//t5 counter//
async function autoclicktier5() {
    cps = cps + 25;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (40);
    }
}

function buyAutoclickTier5() {
    if (counter >= 2500) {
        counter = counter - 2500;
        autoclicktier5();
        document.querySelector("#autoclicktier5").style.display = "none";
        upgrades.push("Autoclick Tier 5");
    } else {
        alert("Not enough!");
    }
}

//t6 counter//
async function autoclicktier6() {
    cps = cps + 50;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (20);
    }
}

function buyAutoclickTier6() {
    if (counter >= 5000) {
        counter = counter - 5000;
        autoclicktier6();
        document.querySelector("#autoclicktier6").style.display = "none";
        upgrades.push("Autoclick Tier 6");
    } else {
        alert("Not enough!");
    }
}

//t7 counter//
async function autoclicktier7() {
    cps = cps + 400;
    while (true) {
    counter ++;
    updateCounter()
    await cooldown (2.5);
    }
}

function buyAutoclickTier7() {
    if (counter >= 10000) {
        counter = counter - 10000;
        autoclicktier7();
        document.querySelector("#autoclicktier7").style.display = "none";
        upgrades.push("Autoclick Tier 7");
        document.querySelector("#endgame").style.display = "block";
    } else {
        alert("Not enough!");
    }
}

function endgame() {
    if (counter >= 1000000) {
        document.querySelector(".endgame").style.display = "flex";
    }
}

function buyEndgame() {
    if (counter >= 1000000) {
        counter = counter - 1000000;
        endgame();
    } else {
        alert("Not enough!");
    }
}
//multiplier stuff//
async function multiplier2x() {
    cps = cps;
    counter = counter * 2;
    multiplieruses = multiplieruses + 1;
    updateCounter()
}

function buyMultiplier2x() {
    if (multiplieruses > 4) {
        document.querySelector("#multiplier2x").style.display = "none";
    } else if (counter >= 500) {
        counter = counter - 500;
        multiplier2x();
        updateCounter();
    } else {
        alert("Not enough!");
    }
}

//function that sets up delay/wait for the cooldown, returns the delay//
function cooldown(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
