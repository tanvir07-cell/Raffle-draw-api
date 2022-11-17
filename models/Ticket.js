// eikhane ekti ticket er shape ki rokom hobe seti thakbe:

const shortid = require("shortid");

class Ticket {
  constructor(username, price) {
    this.id = shortid.generate();

    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
