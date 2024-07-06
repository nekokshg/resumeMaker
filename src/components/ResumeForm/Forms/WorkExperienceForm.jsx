import '../ResumeForm.css'

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
            
            </label>
            <input type="text" id="companyName" name="companyName" />
            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" />
            <label htmlFor="startDate">Start Date:</label>
            <input type="text" id="startDate" name="startDate" />
            <label htmlFor="endDate">End Date:</label>
            <input type="text" id="endDate" name="endDate" />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" />
        </form>
    )
}

export default WorkExperience