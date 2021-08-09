const db = require("../models");
const { encryptString } = require("../utils/encrypt");

const seedUsers = async () => {
  return [
    {
      name: "admin",
      lastName: "admin",
      email: "admin@mail.com",
      password: await encryptString("123456"),
    },
    {
      name: "user1",
      lastName: "user1 lastName",
      email: "user1@mail.com",
      password: await encryptString("1234567"),
    },
  ];
};
const seedMovies = async () => {
  const getCreditId = (lastName) => {
    return db.Person.find({ lastName: lastName }, { _id: 1 });
  };

  const bale = await getCreditId("Bale");
  const ledger = await getCreditId("Ledger");
  const caine = await getCreditId("Caine");
  const nolan = await getCreditId("Nolan");
  const robbins = await getCreditId("Robbins");
  const freeman = await getCreditId("Freeman");
  const gunton = await getCreditId("Gunton");
  const darabont = await getCreditId("Darabont");
  const pitt = await getCreditId("Pitt");
  const norton = await getCreditId("Norton");
  const loaf = await getCreditId("Loaf");
  const fincher = await getCreditId("Fincher");
  const uhls = await getCreditId("Uhls");
  const hanks = await getCreditId("Hanks");
  const wright = await getCreditId("Wright");
  const sinise = await getCreditId("Sinise");
  const zemeckis = await getCreditId("Zemeckis");
  const roth = await getCreditId("Roth");
  const diCaprio = await getCreditId("DiCaprio");
  const gordonLevitt = await getCreditId("Gordon-Levitt");
  const page = await getCreditId("Page");
  const spacey = await getCreditId("Spacey");
  const mcConaughey = await getCreditId("McConaughey");
  const hathaway = await getCreditId("Hathaway");
  const chastain = await getCreditId("Chastain");
  return [
    {
      title: "The Dark Knight",
      releaseYear: 2008,
      genres: ["Action", "Crime", "Drama"],
      duration: 152,
      cast: [...bale, ...ledger, ...caine],
      crew: [...nolan],
    },
    {
      title: "The Shawshank Redemption",
      releaseYear: 1994,
      genres: ["Drama"],
      duration: 142,
      cast: [...robbins, ...freeman, ...gunton],
      crew: [...darabont],
    },
    {
      title: "Fight Club",
      releaseYear: 1999,
      genres: ["Drama"],
      duration: 139,
      cast: [...pitt, ...norton, ...loaf],
      crew: [...fincher, ...uhls],
    },
    {
      title: "Forrest Gump",
      releaseYear: 1994,
      genres: ["Comedy", "Drama", "Romance"],
      duration: 142,
      cast: [...hanks, ...wright, ...sinise],
      crew: [...zemeckis, ...roth],
    },
    {
      title: "Inception",
      releaseYear: 2010,
      genres: ["Action", "Adventure", "Sci-Fi"],
      duration: 148,
      cast: [...diCaprio, ...gordonLevitt, ...page],
      crew: [...nolan],
    },
    {
      title: "Seven",
      releaseYear: 1995,
      genres: ["Crime", "Drama", "Mystery"],
      duration: 127,
      cast: [...freeman, ...pitt, ...spacey],
      crew: [...fincher],
    },
    {
      title: "Interstellar",
      releaseYear: 2014,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      duration: 169,
      cast: [...mcConaughey, ...hathaway, ...chastain],
      crew: [...nolan],
    },
  ];
};

const seedPersons = () => {
  return [
    {
      name: "Christopher",
      lastName: "Nolan",
      dateOfBirth: "1970-07-30",
      placeOfBirth: "London",
      roles: "Director",
    },
    {
      name: "Frank",
      lastName: "Darabont",
      dateOfBirth: "1959-01-28",
      placeOfBirth: "Montbéliard",
      roles: "Director",
    },
    {
      name: "David",
      lastName: "Fincher",
      dateOfBirth: "1962-08-28",
      placeOfBirth: "Denver",
      roles: "Director",
    },
    {
      name: "Jim",
      lastName: "Uhls",
      dateOfBirth: "1957-03-25",
      placeOfBirth: "Missouri",
      roles: "Screenplay Writer",
    },
    {
      name: "Robert",
      lastName: "Zemeckis",
      dateOfBirth: "1951-05-14",
      placeOfBirth: "Chicago",
      roles: "Director",
    },
    {
      name: "Eric",
      lastName: "Roth",
      dateOfBirth: "1945-03-22",
      placeOfBirth: "New York",
      roles: "Screenplay Writer",
    },
    {
      name: "Christian",
      lastName: "Bale",
      dateOfBirth: "1974-01-30",
      placeOfBirth: "Haverfordwest",
      roles: "Actor",
    },
    {
      name: "Heath",
      lastName: "Ledger",
      dateOfBirth: "1979-04-04",
      placeOfBirth: "Perth, Western Australia",
      roles: "Actor",
    },
    {
      name: "Michael",
      lastName: "Caine",
      dateOfBirth: "1933-03-14",
      placeOfBirth: "London",
      roles: "Actor",
    },
    {
      name: "Leonardo",
      lastName: "DiCaprio",
      dateOfBirth: "1974-11-11",
      placeOfBirth: "Hollywood",
      roles: "Actor",
    },
    {
      name: "Joseph",
      lastName: "Gordon-Levitt",
      dateOfBirth: "1981-02-17",
      placeOfBirth: "Los Angeles",
      roles: "Actor",
    },
    {
      name: "Elliot",
      lastName: "Page",
      dateOfBirth: "1987-02-21",
      placeOfBirth: "Halifax",
      roles: "Actor",
    },
    {
      name: "Matthew",
      lastName: "McConaughey",
      dateOfBirth: "1969-11-04",
      placeOfBirth: "Uvalde",
      roles: "Actor",
    },
    {
      name: "Anne",
      lastName: "Hathaway",
      dateOfBirth: "1982-11-12",
      placeOfBirth: "Brooklyn",
      roles: "Actress",
    },
    {
      name: "Jessica",
      lastName: "Chastain",
      dateOfBirth: "1977-03-24",
      placeOfBirth: "Sacramento",
      roles: "Actress",
    },

    {
      name: "Tim",
      lastName: "Robbins",
      dateOfBirth: "1958-10-16",
      placeOfBirth: "West Covina",
      roles: "Actor",
    },
    {
      name: "Morgan",
      lastName: "Freeman",
      dateOfBirth: "1937-06-01",
      placeOfBirth: "Memphis",
      roles: "Actor",
    },
    {
      name: "Brad",
      lastName: "Pitt",
      dateOfBirth: "1963-12-18",
      placeOfBirth: "Shawnee",
      roles: "Actor",
    },
    {
      name: "Edward",
      lastName: "Norton",
      dateOfBirth: "1969-08-18",
      placeOfBirth: "Boston",
      roles: "Actor",
    },
    {
      name: "Meat",
      lastName: "Loaf",
      dateOfBirth: "1947-09-27",
      placeOfBirth: "Dallas",
      roles: "Actor",
    },
    {
      name: "Tom",
      lastName: "Hanks",
      dateOfBirth: "1956-07-09",
      placeOfBirth: "Concord",
      roles: "Actor",
    },
    {
      name: "Bob",
      lastName: "Gunton",
      dateOfBirth: "1945-11-15",
      placeOfBirth: "Santa Monica",
      roles: "Actor",
    },
    {
      name: "Robin",
      lastName: "Wright",
      dateOfBirth: "1966-04-08",
      placeOfBirth: "Dallas",
      roles: "Actress",
    },
    {
      name: "Gary",
      lastName: "Sinise",
      dateOfBirth: "1955-03-17",
      placeOfBirth: "Blue Island",
      roles: "Actor",
    },
    {
      name: "Kevin",
      lastName: "Spacey",
      dateOfBirth: "1959-07-26",
      placeOfBirth: "South Orange",
      roles: "Actor",
    },
  ];
};

module.exports = {
  seedUsers,
  seedMovies,
  seedPersons,
};
