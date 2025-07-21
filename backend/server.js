const express = require("express");
const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

// Read CSV and send JSON
app.get("/api/properties", (req, res) => {
  const csvPath = path.join(__dirname, "properties.csv");

  fs.readFile(csvPath, "utf8", (err, csvData) => {
    if (err) {
      console.error("CSV Read Error:", err);
      return res.status(500).json({ error: "Failed to read CSV file" });
    }

    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        res.json(results.data || []);
      },
    });
  });
});

// Read from db.json
app.get("/api/propertyType", (req, res) => {
  const jsonPath = path.join(__dirname, "db.json");

  fs.readFile(jsonPath, "utf8", (err, jsonData) => {
    if (err) {
      console.error("JSON Read Error:", err);
      return res.status(500).json({ error: "Failed to read JSON file" });
    }

    try {
      const parsedData = JSON.parse(jsonData);
      res.json(parsedData.propertyType || []);
    } catch (parseErr) {
      console.error("JSON Parse Error:", parseErr);
      res.status(500).json({ error: "Failed to parse JSON file" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
