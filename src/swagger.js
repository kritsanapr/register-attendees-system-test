module.exports = options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Register System API ",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Register System API",
        url: "",
        email: "kritsana.pr.41@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3333",
      },
    ],
  },
  apis: ["/routes/*.route.js"],
};
