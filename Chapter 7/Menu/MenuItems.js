class menu {
  #price1 = 10;
  #price2 = 20;

  constructor(qty1, qty2) {
    this.qty1 = qty1;
    this.qty2 = qty2;
  }

  cost() {
    return this.qty1 * this.#price1 + this.qty2 * this.#price2;
  }
  get total() {
    return this.cost();
  }
}

const item1 = new menu(20, 3);
console.log(item1.total);
