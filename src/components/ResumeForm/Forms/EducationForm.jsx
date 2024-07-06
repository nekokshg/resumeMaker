import '../ResumeForm.css'

function EducationForm(){
    return(
        <form className="form">
            <label htmlFor="schoolName">School Name:</label>
            <input type="text" id="schoolName" name="schoolName" />
            <label htmlFor="degree">Degree:</label>
            <input type="text" id="degree" name="degree" />
            <label htmlFor="startDate">Start Date:</label>
            <input type="text" id="startDate" name="startDate" />
            <label htmlFor="endDate">End Date:</label>
            <input type="text" id="endDate" name="endDate" />
        </form>
    )
}

export default EducationForm;