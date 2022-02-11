import React, { useEffect } from 'react'
import ProfExp from './ProfExp'
import GenInfo from './GenInfo'
import Education from './Education'
import Divider from './Divider'
import Favicon from '../assets/favicon.png'

const Resume = ({jobOne, jobTwo, jobThree, firstName, lastName, address, city, state, zip, email, phone, school, degree, major, year, honors, gpa, company, title, dutiesOne, dutiesTwo, dutiesThree, date, newCompanyTwo, newTitleTwo, newDutiesTwoOne, newDutiesTwoTwo, newDutiesTwoThree, newDateTwo, newCompanyThree, newTitleThree, newDutiesThreeOne, newDutiesThreeTwo, newDutiesThreeThree, newDateThree}) => {

    useEffect(()=> {
        const head = document.querySelector("head");
        const favIcon = document.createElement("link")
        head.appendChild(favIcon)
        favIcon.rel = "shortcut icon";
        favIcon.type = "image/png";
        favIcon.href = Favicon
    })

    return (
        <section className="resume">
            <h2 className="name">{firstName} {lastName}</h2>

            <Divider />

            <GenInfo address={address} city={city} state={state} zip={zip} email={email} phone={phone} />

            <ProfExp jobOne={jobOne} company={company} title={title} dutiesOne={dutiesOne} dutiesTwo={dutiesTwo} dutiesThree={dutiesThree} date={date} jobTwo={jobTwo} jobThree={jobThree} newCompanyTwo={newCompanyTwo} newTitleTwo={newTitleTwo} newDutiesTwoOne={newDutiesTwoOne} newDutiesTwoTwo={newDutiesTwoTwo} newDutiesTwoThree={newDutiesTwoThree} newDateTwo={newDateTwo} newCompanyThree={newCompanyThree} newTitleThree={newTitleThree} newDutiesThreeOne={newDutiesThreeOne} newDutiesThreeTwo={newDutiesThreeTwo} newDutiesThreeThree={newDutiesThreeThree} newDateThree={newDateThree}/>
            
            <Education school={school} major={major} degree={degree} year={year} honors={honors} gpa={gpa} />

            <Divider />
        </section>
    )
}

export default Resume