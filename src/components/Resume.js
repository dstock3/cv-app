import React, { useState } from 'react'
import ProfExp from './ProfExp'
import GenInfo from './GenInfo'
import Education from './Education'
import Divider from './Divider'

const Resume = ({genInfo, edInfo, profInfo, isSubmitted}) => {
    const [placeholder, setPlaceholder] = useState({
        firstName: 'Sally',
        lastName: 'Smith',
        address: '555 New Ave, Apt. #4',
        city: 'New Orleans',
        state: 'LA',
        zip: '70726',
        email: 'SallySmith@gmail.com',
        phone: '(777) 809-2222',
        school: 'University of Iowa',
        major: 'Finance',
        honors: 'Magna Cum Laude',
        gpa: '3.7',
        year: '2012',
        company: 'Google',
        title: 'Business Manager',
        dutiesOne: 'Manage operations and employees',
        dutiesTwo: 'Increased employee retention by optimizing workplace satisfaction',
        dutiesThree: 'Implement company policies to ensure that compliance with labor laws',
        date: '2017-Present',

    })

    if (isSubmitted) {
        return (
            <div className="resume">
                <h2 className="name">{genInfo.firstName} {genInfo.lastName}</h2>
    
                <Divider />
    
                <GenInfo address={genInfo.address} city={genInfo.city} state={genInfo.state} zip={genInfo.zip} email={genInfo.email} phone={genInfo.phone} />
    
                <ProfExp jobOne={profInfo.jobOne} company={profInfo.company} title={profInfo.title} dutiesOne={profInfo.dutiesOne} dutiesTwo={profInfo.dutiesTwo} dutiesThree={profInfo.dutiesThree} date={profInfo.date}/>
    
                <Education school={edInfo.school} major={edInfo.major} degree={edInfo.degree} year={edInfo.year} honors={edInfo.honors} gpa={edInfo.gpa} />
            </div>
        )
    } else {
        return (
            <div className="resume">
                <h2 className="name">{placeholder.firstName} {placeholder.lastName}</h2>
    
                <Divider />
    
                <GenInfo address={placeholder.address} city={placeholder.city} state={placeholder.state} zip={placeholder.zip} email={genInfo.email} phone={genInfo.phone} />
    
                <ProfExp jobOne={placeholder.jobOne} company={placeholder.company} title={placeholder.title} dutiesOne={placeholder.dutiesOne} dutiesTwo={placeholder.dutiesTwo} dutiesThree={placeholder.dutiesThree} date={placeholder.date}/>
    
                <Education school={placeholder.school} major={placeholder.major} degree={placeholder.degree} year={placeholder.year} honors={placeholder.honors} gpa={placeholder.gpa} />
            </div>
        )
    }
}

export default Resume