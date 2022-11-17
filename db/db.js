// eikhane database er moddeh ekekti ticket er moddeh ki ki functionality gula thakbe ta thakbe

const Ticket = require("../models/Ticket");

class myDb {
  // sob tickets gula amra ei array te rakhbo:
  constructor() {
    this.tickets = [];
  }

  /**
   * create a single ticket in the database:
   * @param {string} username
   * @param {number} price
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple tickets for one user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */

  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity.length; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }
  /**
   * returns all available tickets
   * @returns {Ticket}
   */
  find() {
    return this.tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @return {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
    return ticket;
  }
}
const myDb = new myDb();

module.exports = myDb;
