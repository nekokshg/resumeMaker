import React from 'react';
import '../ResumeForm.css';

function PersonalDetailsForm({ personalDetails, setPersonalDetails }){
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPersonalDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }
    
    return(
        <form className="form">
            <label htmlFor="fullname" className="label">
                Full name:
                <input 
                    type="text" 
                    id="fullname" 
                    name="fullname"
                    value={personalDetails.fullname}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="email" className="label">
                Email:
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={personalDetails.email}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="website" className='label'>
                Website:
                <input 
                    type="text"
                    id="website"
                    name="website"
                    value={personalDetails.website}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}

export default PersonalDetailsForm;