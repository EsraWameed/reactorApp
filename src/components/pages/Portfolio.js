import React from "react";
import Projects from "../Projects";
import Motivation from "../../images/deployed2.png";
import Tea from "../../images/teaaa.png";
import Weather from "../../images/weather.png";
import Quiz from "../../images/quiz.png";
import Ezee from "../../images/Ezeecommerce.png";
import Team from "../../images/teamGenerator.png";

const projects = [
  {
    id: 1,
    title: "TEAGRAM",
    projectSummary: "A RESTful API social media application allowing users to create profiles and interact with other users posts through liking, commenting, and downloading images.",
    projectImg: Tea,
    repo: "https://github.com/EsraWameed/teagram/",
    deployDemo: "https://tea-gram.herokuapp.com/",
  },
  {
    id: 2,
    title: "MOTIVATION LOCALE",
    projectSummary: "An application utilizing two server-side API’s to randomly generate motivational quotes, positive images, and store user feelings to lift user spirit.",
    projectImg: Motivation,
    repo: "https://github.com/EsraWameed/Motivation-Locale/",
    deployDemo: "https://esrawameed.github.io/Motivation-Locale/",
  },
  {
    id: 3,
    title: "WEATHER BOARD",
    projectSummary:
      "An application utilizing third-party APIs to retrieve daily weather data. Upon a user searching for a city, weather data, and a 5-day forecast are saved into localStorage.",
    projectImg: Weather,
    repo: "https://github.com/EsraWameed/WeatherBoard",
    deployDemo: "https://esrawameed.github.io/WeatherBoard/",
  },
  {
    id: 4,
    title: "CODING QUIZ",
    projectSummary: "An application utilizing Web APIs, DOM methods to present users with a timed coding quiz that keeps track of their scores and reduces time on the timer when questions are answered incorrectly.",
    projectImg: Quiz,
    repo: "https://github.com/EsraWameed/Coding-Knowledge-Quiz-Game/",
    deployDemo: "https://esrawameed.github.io/Coding-Knowledge-Quiz-Game/",
  },
  {
    id: 5,
    title: "E-COMMERCE",
    projectSummary:
      "This E-commerce backend node.js application utilizes express.js server and an SQL database. This RESTful APIs executes CRUD operations. This application uses sequelize to convert data to and from the database. Insomnia was used to demonstrate functionality when executing requests.",
    projectImg: Ezee,
    repo: "https://github.com/EsraWameed/Ezee-Commerce",
    deployDemo: "https://www.youtube.com/watch?v=9ZIUlCNxBqo&ab_channel=EsraAl-Abduljabar",
  },
  {
    id: 6,
    title: "PROFILEATOR",
    projectSummary: "This application was created to allow Managers of companies to efficiently create new roles/positions within their company, and add universal information about each member, such as name,id, and email. Alongside the universal information inputted for each member type, the different member types have their own customizable information inputs such as gitHub username for the Engineer, office number for the Manager, and school being attended by the intern.",
    projectImg: Team,
    repo: "https://github.com/EsraWameed/Profileator-Team-Generator",
    deployDemo: "https://www.youtube.com/watch?v=SKNfqD-BV8E&ab_channel=EsraAl-Abduljabar",
  },
];

export default function Portfolio() {
  return <Projects projects={projects} />;
}


