const leeftijd = 50;
const naam = "Sarah";
const totaalbedrag = 75;

if (leeftijd >= 18 && leeftijd <= 25) {
    console.log("Je krijgt 50 % korting");
} else {
    console.log("Helaas geen korting voor jou.");
} 

if (naam === "Sarah" || naam === "Bram") {
    console.log("Gefeliciteerd. Gratis bier voor jou!!");
} else {
    console.log("Mooie naam, maar helaas geen gratis bier voor jou.");
}

if (totaalbedrag >= 25 && totaalbedrag < 50) {
    console.log("Gefeliciteerd. Je krijgt een portie (vega)bitterballen gratis!!");
} else if (totaalbedrag >= 50 && totaalbedrag < 100) {
    console.log("Gefeliciteerd. Je krijgt een portie nachos gratis!!");
} else if (totaalbedrag >= 100) {
    console.log("Gefeliciteerd. Je krijgt een flesje champagne gratis!!");
} else {
    console.log("Besteed eens wat meer en zie wat er gebeurd.");
}

