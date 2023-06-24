const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught Exeption
process.on("uncaughtException", error => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught Exeption`);
  process.exit(1);
});

// Config

dotenv.config({ path: "backend/config/config.env" });

// Connecting to databases

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});



// unhandle Promise Rejection

process.on("unhandledRejection", err => {
  console.log(`Error: ${err.messsage}`);
  console.log(`Shutting down the server due to unhandles Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
