/* The form for compiling the various forms */
import PersonalDetailsForm from "./Forms/PersonalDetailsForm";
import EducationForm from "./Forms/EducationForm";
import WorkExperience from "./Forms/WorkExperienceForm";
import '../ResumeForm/ResumeForm.css'
import React, { useState } from "react";

function ResumeForm({ personalDetails, setPersonalDetails, workDetails, setWorkDetails, educationDetails, setEducationDetails}) {
    return(
        <div className="resumeFormContainer">
            <h2>Personal Details</h2>
            <PersonalDetailsForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />

            <h2>Work Experience</h2>
            <WorkExperience workDetails={workDetails} setWorkDetails={setWorkDetails} />

            <h2>Education</h2>
            <EducationForm educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>
        </div>
    )
}

export default ResumeForm;