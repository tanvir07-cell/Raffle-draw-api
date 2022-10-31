const shortId = require("shortid");

class Ticket {
  constructor(userName, price) {
    this.id = shortId.generate();
    this.userName = userName;
    this.price = price;
    this.createdAt = new Date();

    // initially updateAt tio new Date() ei thakbe:
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
