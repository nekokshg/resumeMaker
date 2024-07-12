function WorkExperience({ workDetails, setWorkDetails }){
    const handleChange = (e) => {
        const {name, value} = e.target;
        setWorkDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }

    return(
        <form className='form'>
            <label htmlFor="companyName" className='label'>
                Company Name:
                <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    value={workDetails.companyName}
                    onChange={handleChange}
                    />
            </label>
            <label htmlFor="jobTitle" className='label'>
                Job Title:
                <input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    value={workDetails.jobTitle}
                    onChange={handleChange}
                    />
            </label>
            <label htmlFor="startDate" className='label'>
                Start Date:
                <input 
                    type="text" 
                    id="startDate" 
                    name="startDate" 
                    value={workDetails.startDate}
                    onChange={handleChange}
                    />
            </label>
            <label htmlFor="endDate" className='label'>
                End Date:
                <input 
                    type="text" 
                    id="endDate" 
                    name="endDate" 
                    value={workDetails.endDate}
                    onChange={handleChange}
                    />
            </label>
            <label htmlFor="location" className='label'>
                Location:
                <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    value={workDetails.location}
                    onChange={handleChange}
                    />
                </label>
        </form>
    )
}

export default WorkExperience