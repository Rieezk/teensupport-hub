const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

let jobs = [];
let advicePosts = [];

// Submit Job
app.post("/submit-job", (req, res) => {
  const job = req.body;
  jobs.push(job);
  res.json({ message: "Job submitted successfully!" });
});

// Get Jobs
app.get("/jobs", (req, res) => {
  res.json(jobs);
});

// Submit Advice
app.post("/submit-advice", (req, res) => {
  const advice = req.body;
  advicePosts.push(advice);
  res.json({ message: "Advice submitted successfully!" });
});

// Get Advice
app.get("/advice", (req, res) => {
  res.json(advicePosts);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
