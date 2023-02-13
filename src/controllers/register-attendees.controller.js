const registerAttendees = (req, res, next) => {
  res.status(200).send({
    message: "Register Attendees API is working",
  });
};

const checkTickets = (req, res, next) => {
  res.status(200).send({
    message: "Check Tickets API is working",
  });
};

const showAllRegister = (req, res, next) => {
  res.status(200).send({
    message: "Check Tickets API is working",
  });
};

module.exports = { registerAttendees, checkTickets, showAllRegister };
