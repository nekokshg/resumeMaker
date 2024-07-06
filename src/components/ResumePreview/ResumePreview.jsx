/* Component for previewing the resume */
import React from 'react';

function ResumePreview({ personalDetails }){
    return (
        <div className="resumePreview">
            {/* Personal Details */}
            <p>{personalDetails.fullname} </p>
            <p>{personalDetails.email} </p>
            <p>{personalDetails.website} </p>

        </div>
    )
}

export default ResumePreview;