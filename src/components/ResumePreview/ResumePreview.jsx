/* Component for previewing the resume */
import React from 'react';
import '../ResumePreview/ResumePreview.css'

function ResumePreview({ personalDetails , workDetails, educationDetails}){
    return (
        <div className="resumePreview">
            {/* Personal Details 
            * Object.entries(personalDetails): Converts the personalDetails object into an array of key-value pairs.
            */}
            {Object.entries(personalDetails).map(([key, value]) => (
                key === 'fullname' ? (
                    <p key={key}>{value}</p>
                ) : (
                    <p key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                )
            ))}

            {/* Work Experience */}
            <h3>Work History</h3>
            {workDetails.map((entry, index) => (
                <div key={index} className='work-entry'>
                    <p><strong>Company Name:</strong> {entry.companyName}</p>
                    <p><strong>Job Title:</strong>{entry.jobTitle}</p>
                    <p><strong>Location:</strong>{entry.location}</p>
                    <p><strong>Start Date:</strong>{entry.startDate}</p>
                    <p><strong>End Date:</strong>{entry.endDate}</p>
                </div>
            ))}

            {/* Educational History */}
            <h3>Educational History</h3>
            {educationDetails.map((entry, index) => (
                <div key={index} className="education-entry">
                    <p><strong>School Name:</strong> {entry.schoolName}</p>
                    <p><strong>Degree:</strong> {entry.degree}</p>
                    <p><strong>Start Date:</strong> {entry.startDate}</p>
                    <p><strong>End Date:</strong> {entry.endDate}</p>
                </div>
            ))}
        </div>
    )
}

export default ResumePreview;