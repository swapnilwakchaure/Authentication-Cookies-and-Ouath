require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("welcome to authentication using cookies and oauth");
});

app.listen(port, () => {
  try {
    console.log(`server is running on port ${port}`);
  } catch (error) {
    console.log("error: ", error);
  }
});
