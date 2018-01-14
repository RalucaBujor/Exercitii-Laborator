// Input
var blackFridayCart = {
  telefon: "350",
  consola: "250",
  televizor: "450",
  iepurasPlus: "10.60",
  cercei: "20.34",
  geanta: "22.36"
};

function getCartValue(){
    var x = parseFloat(blackFridayCart.telefon) + parseFloat(blackFridayCart.consola) + parseFloat(blackFridayCart.televizor) + parseFloat(blackFridayCart.iepurasPlus) + parseFloat(blackFridayCart.cercei) + parseFloat(blackFridayCart.geanta);
    console.log(x);
}

// Output
getCartValue(blackFridayCart); // 1103.3