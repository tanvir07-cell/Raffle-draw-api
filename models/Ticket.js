const shortId = require("shortid");

class Ticket {
  // nicher line gula hocceh JsDoc. ei JsDoc diye javaScript er type related problem gulake solve kora jay:
  /**
     *Represents a ticket
     *@constructor
     *@param {string} userName
     *@param {number} price
     
     
     */
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
