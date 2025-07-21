const express = require("express");
const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

// Read and parse CSV file
app.get("/api/properties", (req, res) => {
  const csvPath = path.join(__dirname, "properties.csv");
  console.log("Looking for CSV at:", csvPath);

  fs.readFile(csvPath, "utf8", (err, csvData) => {
    if (err) {
      console.error("CSV Read Error:", err);
      return res.status(500).json({ error: "Failed to read CSV file" });
    }

    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        res.json(results.data);
      },
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
