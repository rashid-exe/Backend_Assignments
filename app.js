const express = require("express");
const {join} = require("path");
const app = express();

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => res.redirect("/admin/dashboard"));
  

app.get("/admin/dashboard", (req, res) =>
  res.render("dashboard", {
    user: "Joe Mockery",
    posts: [
      {
        id: 1,
        author: "Joe M",
        title: "I love Express",
        content: "Express is a wonderful framework for building Node.js apps",
      },
      {
        id: 2,
        author: "Mike F",
        title: "Have you tried Pug?",
        content:
          "I recently tried the Pug templating language and its excellent",
      },
    ],
  })
);

app.get("/admin/logout", (req, res) => res.redirect("/admin/login"));

app.post("/admin/approve", (req, res) => res.redirect("/admin/dashboard"));

app.listen(3001, () => console.log("Blog Chef is cooking on port 3001"));
