import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

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

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/hello").then((onfulfilled) => {
    res.send(onfulfilled.data.message);
  }).catch((error) => res.send(error.message));
});

app.post("/api/.user/login", (req, res) => {

  axios.post("http://nginx/api/login_check", {username: req.body.username, password: req.body.password}, {

    headers: {

      "Content-Type": "application/json"

    }

  }).then((onfulfilled) => {

    res.send(onfulfilled.data);

  }).catch((error) => res.send(error.message));

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

app.post("/api/.user/register", checkHeaders, (req, res) => {

  axios.post("http://nginx/api/register/",  {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    phonenumber: req.body.phonenumber
  }, {
    headers: {
      "authorization": `Bearer ${req.get("authorization").split(' ')[1]}`,
      "Content-Type": "application/json"
    }
  }).then((onfulfilled) => res.send(onfulfilled.data))
      .catch((error) => res.send(error.message))
  ;

});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
