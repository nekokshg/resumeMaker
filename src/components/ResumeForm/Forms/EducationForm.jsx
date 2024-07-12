import React from "react";

function EducationForm({ educationDetails, setEducationDetails }) {
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducationDetails = [...educationDetails];
        updatedEducationDetails[index][name] = value;
        setEducationDetails(updatedEducationDetails);
    };

    const addEducationEntry = () => {
        setEducationDetails([
            ...educationDetails,
            { schoolName: "", degree: "", startDate: "", endDate: "" }
        ]);
    };

    return (
        <form className="form">
            {educationDetails.map((entry, index) => (
                <div key={index} className="education-entry">
                    <label htmlFor={`schoolName-${index}`} className='label'>
                        School Name:
                        <input
                            type="text"
                            id={`schoolName-${index}`}
                            name="schoolName"
                            value={entry.schoolName}
                            onChange={(e) => handleChange(index, e)}
                        />
                    </label>
                    <label htmlFor={`degree-${index}`} className='label'>
                        Degree:
                        <input
                            type="text"
                            id={`degree-${index}`}
                            name="degree"
                            value={entry.degree}
                            onChange={(e) => handleChange(index, e)}
                        />
                    </label>
                    <label htmlFor={`startDate-${index}`} className='label'>
                        Start Date:
                        <input
                            type="text"
                            id={`startDate-${index}`}
                            name="startDate"
                            value={entry.startDate}
                            onChange={(e) => handleChange(index, e)}
                        />
                    </label>
                    <label htmlFor={`endDate-${index}`} className='label'>
                        End Date:
                        <input
                            type="text"
                            id={`endDate-${index}`}
                            name="endDate"
                            value={entry.endDate}
                            onChange={(e) => handleChange(index, e)}
                        />
                    </label>
                </div>
            ))}
            <button type="button" onClick={addEducationEntry}>
                Add Another School
            </button>
        </form>
    );
}

export default EducationForm;
