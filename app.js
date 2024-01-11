const express = require("express");
const app = express();
const cors = require('cors');

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/professional", (req, res) => {
  const professionalInfo = {
    professionalName: "Kevin Morales",
    base64Image: "your_base64_encoded_image_here",
    primaryDescription: "Software Engineer",
    workDescription1: "Worked on developing scalable web applications.",
    workDescription2:
      "Collaborated with cross-functional teams for project success.",
    linkTitleText: "Explore More",
    nameLink: {
      firstName: "Kevin",
      url: "https://www.example.com/kevin",
    },
    linkedInLink: {
      text: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/kevin-morales",
    },
    githubLink: {
      text: "Check out GitHub",
      link: "https://github.com/kevinmorales",
    },
  };
  res.json(professionalInfo);
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));

//app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
});
