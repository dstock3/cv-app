import React, { useState } from 'react'
import ProfExp from './ProfExp'
import GenInfo from './GenInfo'
import Education from './Education'
import Divider from './Divider'

const Resume = ({genInfo, edInfo, profInfo}) => {

    return (
        <div className="resume">
            <h2 className="name">{genInfo.firstName} {genInfo.lastName}</h2>

            <Divider />

            <GenInfo address={genInfo.address} city={genInfo.city} state={genInfo.state} zip={genInfo.zip} email={genInfo.email} phone={genInfo.phone} />

            <ProfExp jobOne={profInfo.jobOne} company={profInfo.company} title={profInfo.title} dutiesOne={profInfo.dutiesOne} dutiesTwo={profInfo.dutiesTwo} dutiesThree={profInfo.dutiesThree} date={profInfo.date}/>

            <Education school={edInfo.school} major={edInfo.major} degree={edInfo.degree} year={edInfo.year} honors={edInfo.honors} gpa={edInfo.gpa} />
        </div>
    )
}

export default Resume