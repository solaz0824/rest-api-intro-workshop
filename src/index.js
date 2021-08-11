const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");
// const { seedMoviesData, seedUsersData, seedPersonsData } = require("./db/seed");

connect().then(async () => {
  config.logger.info(`DB connected!`);

  // await seedUsersData();
  // await seedPersonsData();
  // await seedMoviesData();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
