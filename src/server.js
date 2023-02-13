const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./swagger");
const app = express();
const port = process.env.PORT || 3333;

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

app.use(cors({}));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/helpcheck", (req, res) => {
  res.status(200).send({
    message: "Help Check API is working",
  });
});

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/attendees", require("./routes/register-attendees.route"));

app.listen(port, () =>
  console.log(`Server running on http://127.0.0.1:${port}`)
);
