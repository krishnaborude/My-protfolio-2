import React from "react";
import { projectsData } from "../data/data";
import { LuMousePointerClick } from "react-icons/lu";

function Project() {
  return (
    <section id="Projects">
      <div className="container project-container">
        <h2>Feature Projects</h2>

        <div className="projects-content">
          {
          projectsData.map(({ img, des, name, tech, prokectlink,figmalink,githublink }, index) => {
            return (
              <article className="project-card" key={index}>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <small>{des}</small>
                <div>
                <a
                  href={prokectlink}
                  style={{ cursor: prokectlink === "#" ? "not-allowed" : "pointer" }}
                  onClick={(e) => {
                    if (prokectlink === "#") e.preventDefault();
                  }}
                >
                  <LuMousePointerClick />
                </a>
                {/* <a
                  href={figmalink}
                  style={{ cursor: figmalink === "#" ? "not-allowed" : "pointer" }}
                  onClick={(e) => {
                    if (figmalink === "#") e.preventDefault();
                  }}
                >
                  <LuMousePointerClick />
                </a> */}
                <a
                  href={githublink}
                  style={{ cursor: githublink === "#" ? "not-allowed" : "pointer" }}
                  onClick={(e) => {
                    if (githublink === "#") e.preventDefault();
                  }}
                >
                  <LuMousePointerClick />
                </a>
                </div>
              </article>
            );
          })
          }
        </div>
      </div>
    </section>
  );
}

export default Project;
