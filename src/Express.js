import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/teacher", (req, res) => {
  res.send("teacher list ");
});
app.get("/student", (req, res) => {
  res.send("student list ");
});

app.listen(8080, () => {});
