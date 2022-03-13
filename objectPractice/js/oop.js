const output = document.getElementById("output");

function Hamberger(bun, veggie, cheese, sauce, patty, pattyNum) {
  this.bun = bun;
  this.veggie = veggie;
  this.cheese = cheese;
  this.sauce = sauce;
  this.patty = patty;
  this.pattyNum = pattyNum;
  this.desc = function () {
    output.textContent = `Welcome to Jepil's Burger! You have selected ${this.bun}. Your burger has ${this.veggie}, ${this.cheese}, ${this.sauce}, ${this.pattyNum} ${this.patty} patties in it. Enjoy!`;
  };
}

let burger1 = new Hamberger(
  "sesame seed",
  "lettuce",
  "cheddar cheese",
  "onion sauce",
  "beef",
  3
);
