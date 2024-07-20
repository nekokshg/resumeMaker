function WorkExperience({ workDetails, setWorkDetails }){
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedWorkDetails = [...workDetails];
        updatedWorkDetails[index] = {
            ...updatedWorkDetails[index],
            [name]: value
        }
        setWorkDetails(updatedWorkDetails);
    }

    const addWorkEntry = () => {
        setWorkDetails([
            ...workDetails,
            { companyName: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            location: ''}
        ])
    }

    return(
        <form className='form'>
            {workDetails.map((entry, index) => (
                <div key={index} className="work-entry">
                    <label htmlFor="companyName" className='label'>
                    Company Name:
                    <input 
                        type="text" 
                        id="companyName" 
                        name="companyName" 
                        value={workDetails.companyName}
                        onChange={(e) => handleChange(index, e)}
                        />
                    </label>
                    <label htmlFor="jobTitle" className='label'>
                        Job Title:
                        <input 
                            type="text" 
                            id="jobTitle" 
                            name="jobTitle" 
                            value={workDetails.jobTitle}
                            onChange={(e) => handleChange(index, e)}
                            />
                    </label>
                    <label htmlFor="startDate" className='label'>
                        Start Date:
                        <input 
                            type="text" 
                            id="startDate" 
                            name="startDate" 
                            value={workDetails.startDate}
                            onChange={(e) => handleChange(index, e)}
                            />
                    </label>
                    <label htmlFor="endDate" className='label'>
                        End Date:
                        <input 
                            type="text" 
                            id="endDate" 
                            name="endDate" 
                            value={workDetails.endDate}
                            onChange={(e) => handleChange(index, e)}
                            />
                    </label>
                    <label htmlFor="location" className='label'>
                        Location:
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={workDetails.location}
                            onChange={(e) => handleChange(index, e)}
                            />
                    </label>
                </div>
            ))}
             <button type="button" onClick={addWorkEntry}>
                Add Another Work Entry
            </button>
        </form>
    )
}

export default WorkExperience