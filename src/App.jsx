import './App.css'
import { useState } from 'react'
import InputSectionComponent from './components/InputSectionComponent.jsx'
import CVView from './components/CVView.jsx';
import DownloadCV from './components/DowloadCV.jsx';
function App() {
  const [image,setImage]=useState();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [school,setSchool]=useState("");
  const [titleOfEducation,setTitleOfEducation]=useState("");
  const [dateOfEducation,setDateOfEducation]=useState("");
  const [company,setCompany]=useState("");
  const [positionTitle,setPositionTitle]=useState("");
  const [mainResponsibilities,setMainResponsibilities]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");
  function handelDeleteClick(){
    setImage();
    setName("")
    setEmail("")
    setPhone("")
    setSchool("")
    setTitleOfEducation("")
    setDateOfEducation("")
    setCompany("")
    setPositionTitle("")
    setMainResponsibilities("")
    setStartDate("")
    setEndDate("")
  }
  return (
    <div className='container'>
      <main>
        <div className='button-container'>
          <button onClick={handelDeleteClick}>Clear</button>
          <DownloadCV formInfo={[{title:"Personal", array:[{name:"image",value:image},{name:"Name",value:name},{name:"Email",value:email},{name:"Phone",value:phone}]},{title:"Educational experience",array:[{name:"School name",value:school},{name:"Title of education",value:titleOfEducation},{name:"Date of education",value:dateOfEducation}]},{title:"Practical experience",array:[{name:"Company name", value:company},{name:"Position title",value:positionTitle},{name:"Main responsibilities",value:mainResponsibilities},{name:"Start date",value:startDate},{name:"End date",value:endDate}]}]}/>
        </div>
        <InputSectionComponent title="General Information" array={[{id:"image",text:"Upload image:",type:"file",value:image,setValue:setImage},{id:"name",text:"Name:",value:name,setValue:setName},{id:"email",text:"Email:",type:"email",value:email,setValue:setEmail},{id:"phone",text:"Phone Number:",value:phone,setValue:setPhone}]}/>
        <InputSectionComponent title="Education Experience" array={[{id:"schoolName" ,text:"School Name:",value:school,setValue:setSchool},{id:"titleOfEducation",text:"Title of education:",value:titleOfEducation,setValue:setTitleOfEducation},{id:"dataOfEducation",text:"Data of education:",type:"date",value:dateOfEducation,setValue:setDateOfEducation}]}/>
        <InputSectionComponent title="Practical Experience" array={[{id:"companyName", text:"Company Name:",value:company,setValue:setCompany},{ id:"positionTitle",text:"Position Title:",value:positionTitle,setValue:setPositionTitle},{ id:"mainResponsibilities",text:"Main Responsibilities:",isInput:false,value:mainResponsibilities,setValue:setMainResponsibilities},{ id:"startDate",text:"Start working date:",type:"date",value:startDate,setValue:setStartDate},{id:"endDate",text:"End working date:", type:"date",value:endDate,setValue:setEndDate}]}/>
      </main>
      <CVView left={[{title:"Personal", array:[{name:"image",value:image},{name:"Name",value:name},{name:"Email",value:email},{name:"Phone",value:phone}],color:"#fff"}]} right={[{title:"Educational experience",array:[{name:"School name",value:school},{name:"Title of education",value:titleOfEducation},{name:"Date of education",value:dateOfEducation}],color:"#008"},{title:"Practical experience",array:[{name:"Company name", value:company},{name:"Position title",value:positionTitle},{name:"Main responsibilities",value:mainResponsibilities},{name:"Start date",value:startDate},{name:"End date",value:endDate}],color:"#008"}]} rightColor="#008" />
    </div>
   
  )
}
export default App
