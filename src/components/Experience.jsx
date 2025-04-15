import React from "react";

import Card from "../UI/Card";

import { experienceData } from "../data/data";

import Shape from "../assets/gradientShape.svg";

function Experience() {
  return (
    <section id="Experience">
      <div className="container experience-container">
        <h3>Skills</h3>
        <div className="experience-cards">
          {experienceData.map(
            ({ icon, cardName, cardInfo, cardLink }, index) => {
              return (
                <Card
                  CardIcon={icon}
                  CardName={cardName}
                  CardInfo={cardInfo}
                  CardLink={cardLink}
                  key={{ index }}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="shape">
        <img src={Shape} alt="" />
      </div>
    </section>
  );
}

export default Experience;
