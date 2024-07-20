import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import ResumeForm from './components/ResumeForm/ResumeForm'
import ResumePreview from './components/ResumePreview/ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: '',
    email: '',
    website: '',
  });

  const [workDetails, setWorkDetails] = useState([
    { companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: ''}
  ])

  const [educationDetails, setEducationDetails] = useState([
    { schoolName: '', degree: '', startDate: '', endDate: '' }
  ]);

  return (
    <>
      <Header />
      <div className="mainContainer">
        <ResumeForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} workDetails={workDetails} setWorkDetails={setWorkDetails} educationDetails={educationDetails} setEducationDetails={setEducationDetails} />
        <ResumePreview personalDetails={personalDetails} workDetails={workDetails} educationDetails={educationDetails}/>
      </div>
    </>
  )
}

export default App;
