import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import {MainBlock} from "./Components/MainBlock";
import {InformationBlock} from "./Components/InformationBlock";
import {ExperienceBlock} from "./Components/ExperienceBlock";
import {SkillsBlock} from "./Components/SkillsBlock";
import {Footer} from "./Components/Footer";
import {WorkExamplesBlock} from "./Components/WorkExamplesBlock";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MainBlock/>
    <InformationBlock/>
    <ExperienceBlock/>
    <WorkExamplesBlock/>
    <SkillsBlock/>
    <Footer/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
