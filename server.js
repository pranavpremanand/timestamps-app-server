import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/difference", (req, res) => {
  const { timestamp1, timestamp2 } = req.body;

  const [day1, month1, year1, hour1, minutes1, seconds1] =
    timestamp1.split(/:|\s/);
  const [day2, month2, year2, hour2, minutes2, seconds2] =
    timestamp2.split(/:|\s/);

  const date1 = new Date(year1, month1 - 1, day1, hour1, minutes1, seconds1);
  const date2 = new Date(year2, month2 - 1, day2, hour2, minutes2, seconds2);

  const difference = (date2 - date1) / 1000;

  res.json(difference);
});

app.listen(port, () => console.log(`Server is running on port : ${port}`));

export default app;
