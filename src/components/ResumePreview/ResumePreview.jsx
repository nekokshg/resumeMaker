/* Component for previewing the resume */
import React from 'react';
import '../ResumePreview/ResumePreview.css'

function ResumePreview({ personalDetails , workDetails, educationDetails}){
    return (
        <div className="resumePreview">
            {/* Personal Details */}
            <h2>{personalDetails.fullname} </h2>
            <p>{personalDetails.email} </p>
            <p>{personalDetails.website} </p>

            {/* Work Experience */}
            <p>{workDetails.companyName}</p>
            <p>{workDetails.jobTitle}</p>
            <p>{workDetails.startDate}</p>
            <p>{workDetails.endDate}</p>
            <p>{workDetails.location}</p>

            {/* Educational History */}
            <p>{educationDetails.schoolName}</p>
        </div>
    )
}

export default ResumePreview;