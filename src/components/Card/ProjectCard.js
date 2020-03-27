import React from "react";
import { FadeInDiv } from "../animation";

const ProjectCard = () => {
  return (
  <FadeInDiv>
    <div className="card-2">
      <div className="project-card">
        <div className="description">
         <div className="title">Open Source Projects</div>
         <ul className="project-list">
           <li><a href="https://github.com/congdv/your-staff-frontend" target="_blank">YourStaffApp:</a> The website to manage payrolls of employees</li>
           <li><a href="https://github.com/congdv/ghi" target="_blank">Ghi:</a> A text editor on Terminal:</li>
           <li><a href="https://github.com/congdv/authorquiz" target="_blank">Author Quiz:</a> The quiz game for guessing who is author of the list book.</li>
           <li><a href="https://github.com/congdv/congdv.github.io" target="_blank">Personal Website:</a> Just personal website</li>
         </ul>
        </div>
      </div>
    </div>
  </FadeInDiv>)
}

export default ProjectCard;