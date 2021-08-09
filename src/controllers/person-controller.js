const db = require("../models");

const createPerson = async (req, res, next) => {
  const { name, lastName, dateOfBirth, placeOfBirth, roles } = req.body;

  try {
    const person = await db.Person.create({
      name,
      lastName,
      dateOfBirth,
      placeOfBirth,
      roles,
    });

    res.status(200).send({
      data: {
        name: person.name,
        lastName: person.lastName,
        dateOfBirth: person.dateOfBirth,
        placeOfBirth: person.placeOfBirth,
        roles: person.roles,
      },
    });
  } catch (error) {
    next(error);
  }
};

//^ example URL localhost:6060/persons?page=2
//^             localhost:6060/persons?page=1&size=4
const getPersons = async (req, res, next) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;
    const users = await db.Person.find().limit(limit).skip(skip).lean();
    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getPersonById = async (req, res, next) => {
  const { id: personId } = req.params;
  try {
    const person = await db.Person.find({ _id: personId }).lean();
    res.status(200).send({
      data: person,
    });
  } catch (error) {
    next(error);
  }
};

const updatePerson = async (req, res, next) => {
  const { id: personId } = req.params;
  const { name, lastName, dateOfBirth, placeOfBirth, roles } = req.body;

  try {
    const updatedPerson = await db.Person.findByIdAndUpdate(
      { _id: personId },
      {
        $set: {
          name,
          lastName,
          dateOfBirth,
          placeOfBirth,
          roles,
        },
      },
      { new: true },
    );
    res.status(200).send({
      data: updatedPerson,
    });
  } catch (error) {
    next(error);
  }
};
const deletePerson = async (req, res, next) => {
  const { id: personId } = req.params;
  try {
    const result = await db.Person.deleteOne({ _id: personId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A person successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a person",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createPerson,
  getPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
