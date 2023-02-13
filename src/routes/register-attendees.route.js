const express = require("express");
const router = express.Router();
const {
  registerAttendees,
  showAllRegister,
  checkTickets,
} = require("../controllers/register-attendees.controller");

/**
 * Register for Attendees if have a ticket
 * FirstName, LastName, Email, Phone
 */
router.post("/register", registerAttendees);

/**
 * Show all user registered. Can sort and search by FirstName and LastName
 * @param {string} sort
 * @param {string} search
 */
router.get("/all", showAllRegister);

/**
 * เช็งที่นั่งคงเหลือ
 * Checked the ticket.
 */
router.get("/checkTicket", checkTickets);

module.exports = router;
