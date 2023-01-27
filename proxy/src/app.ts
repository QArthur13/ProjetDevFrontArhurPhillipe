import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
const cors = require("cors");

function checkHeaders(req, res, next) {

  if (req.get("authorization")) {

    next();

  } else {

    res.status(400).json({"Type": "Erreur", "Status": false, "Message": "Il n'y a pas le token dans l'authorization!"});

  }

}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/api", (_, res) => {
  res.send({message: "Hello API"});
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch((error) => res.send(error.message));
});

app.post("/api/.user/login", (req, res) => {

  axios.post("http://nginx/api/login_check", {username:req.body.username, password:req.body.password}, {

    headers: {

      "Content-Type": "application/json"

    }

  }).then((onfulfilled) => {

    res.send(onfulfilled.data);

  }).catch((error) => res.send(error));

});

app.get("/api/.user/user", checkHeaders, (req, res) => {

  axios.get("http://nginx/api/user", { headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }})
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.post("/api/.user/checkRole", checkHeaders, (req, res) => {

  axios.post("http://nginx/api/user/checkRole", {role: req.body.role}, { headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }})
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.get("/api/.user/admin", checkHeaders, (req, res) => {

  axios.get("http://nginx/api/admin", { headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }})
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.get("/api/.user/future-users", checkHeaders, (req, res) => {

  axios.get("http://nginx/api/future-users/", { headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }})
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.post("/api/.user/register", (req, res) => {

  console.log(req.body);

  axios.post("http://nginx/api/register/",  {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    country: req.body.country,
    phonenumber: req.body.phonenumber
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send({error: error, data: req.body}))
  ;

});

app.post("/api/.user/register/valid-user", checkHeaders, (req, res) => {

  axios.post("http://nginx/api/register/valid-user/"+req.body.id, {}, {

    headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`,
      "Content-Type": "application/json"

    }
  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.get("/api/.user/users", checkHeaders, (req, res) => {

  axios.get("http://nginx/api/users/", {

    headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }

  }).then((onfulfilled) => res.send(onfulfilled.data)).catch((error) => res.send(error));

});

app.get("/api/.car", checkHeaders, (req, res) => {

  axios.get("http://car:5000", {

    headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }

  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error));

});

app.get("/api/.car/car-get", checkHeaders, (req, res) => {

  axios.get("http://car:5000/car", {

    headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`

    }

  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error));

});

app.post("/api/.car/add-car", checkHeaders, (req, res) => {

  axios.post("http://car:5000/add", {

    name: [req.body.name],
    price: [req.body.price],
    image: [req.body.image]

  }, {

    headers: {

      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`,
      "Content-Type": "application/json"

    }

  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error));

});

app.delete("/api/.car/car-del", checkHeaders, (req, res) => {

  axios.post("http://car:5000/car/"+req.body.id+"/delete")
      .then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error));

});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
