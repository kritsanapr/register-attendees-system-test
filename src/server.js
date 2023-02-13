const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./utils/swagger_output.json");
const app = express();
const port = process.env.PORT || 3333;

const db = require("./config/db");
// db.connect();
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    explorer: true,
  })
);

app.use(cors({}));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/helpcheck", (req, res) => {
  res.status(200).send({
    message: "Help Check API is working!!",
  });
});

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/attendees", require("./routes/register-attendees.route"));

app.listen(port, () =>
  console.log(`Server running on http://127.0.0.1:${port}`)
);
