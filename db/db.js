// Model er moddeh er Ticket

const Ticket = require("../db/db");

class MyDb {
  constructor() {
    // amader models er moddeh Ticket.js er moddeh amra shudu dataBase er model that means dataBase(ekti Ticket) er shape ti kemon hobe ta likhechi. Ekhon ei class er moddeh amra onekgula ticket ke jate use korte pari and dataBase e save korte pari tai this.tickets ekti array neoaa.
    this.tickets = [];
  }

  /**
   * create and save a new ticket in the database.
   * @param {string} userName
   * @param {number} price
   * @returns {Object} return a ticket object
   */
  create(userName, price) {
    const ticket = new Ticket(userName, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   *
   * @param {string} userName
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */

  bulkCreate(userName, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(userName, price);
      result.push(ticket);
    }
    return result;
  }
  /**
   *
   * @returns {Array<Ticket>} all available tickets
   */
  find() {
    return this.tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @returns {Ticket} ticket
   */

  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} tk
       * @returns
       */

      (tk) => tk.id === ticketId
    );

    return ticket;
  }

  /**
   *
   * @param {string} userName
   * returns {Array<Ticket>} filtered ticket by userName
   */

  findByUserName(userName) {
    const tickets = this.tickets.filter(
      (tk) =>
        /**
         * @param {Ticket} ticket
         */

        tk.userName === userName
    );
    return tickets;
  }
}

// creating a mydb object
const mydb = new MyDb();

module.exports = mydb;
