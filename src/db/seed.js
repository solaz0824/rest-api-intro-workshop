const db = require("../models");
const { seedUsers, seedMovies, seedPersons } = require("./seedData");

const seedMoviesData = async () => {
  const movies = await seedMovies();
  await db.Movie.deleteMany({});
  await db.Movie.create([...movies]);
};

const seedUsersData = async () => {
  const users = await seedUsers();
  await db.User.deleteMany({});
  await db.User.create([...users]);
};

const seedPersonsData = async () => {
  const persons = [...seedPersons()].map((person) => ({
    ...person,
  }));

  await db.Person.deleteMany({});
  await db.Person.create([...persons]);
};

module.exports = {
  seedMoviesData,
  seedUsersData,
  seedPersonsData,
};
