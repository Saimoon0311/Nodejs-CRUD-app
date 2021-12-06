const Userdb = require("../model/model");

// create new user
exports.createuser = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: "please enter the body" });
    return;
  }
  // craete new user

  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    status: Number(req.body.status),
    gender: req.body.gender,
  });
  user
    .save(user)
    .then((data) => {
      res.status(201).json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) =>
      res.json({ meaage: err.message || " some thing went wrong" })
    );
};

// find users or apecific user

exports.finduser = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (data == null) {
          return res.send("no recorde found");
        } else {
          res.json(data);
        }
      })
      .catch((err) => {
        res.json({ message: err });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

// update user using id

exports.updateuser = (req, res) => {
  if (!req.body) {
    return res.send("please please");
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.send(`can not find the user${id}`);
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.send(err));
};

// delete user with specific id

exports.deleteuser = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.send("no data found");
      } else {
        res.send({ message: "deletes" });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
