import React from 'react'
import ProfExp from './ProfExp'
import GenInfo from './GenInfo'

const Resume = ({jobOne, jobTwo, jobThree, firstName, lastName, address, city, state, zip, email, phone, school, degree, year, honors, gpa, company, title, dutiesOne, dutiesTwo, dutiesThree, date, newCompanyTwo, newTitleTwo, newDutiesTwoOne, newDutiesTwoTwo, newDutiesTwoThree, newDateTwo, newCompanyThree, newTitleThree, newDutiesThreeOne, newDutiesThreeTwo, newDutiesThreeThree, newDateThree}) => {
  return (
    <section className="resume">
        <h2 className="name">{firstName} {lastName}</h2>

        <div className="divider"></div>

        <GenInfo address={address} city={city} state={state} zip={zip} email={email} phone={phone} />

        <ProfExp jobOne={jobOne} company={company} title={title} dutiesOne={dutiesOne} dutiesTwo={dutiesTwo} dutiesThree={dutiesThree} date={date} jobTwo={jobTwo} jobThree={jobThree} newCompanyTwo={newCompanyTwo} newTitleTwo={newTitleTwo} newDutiesTwoOne={newDutiesTwoOne} newDutiesTwoTwo={newDutiesTwoTwo} newDutiesTwoThree={newDutiesTwoThree} newDateTwo={newDateTwo} newCompanyThree={newCompanyThree} newTitleThree={newTitleThree} newDutiesThreeOne={newDutiesThreeOne} newDutiesThreeTwo={newDutiesThreeTwo} newDutiesThreeThree={newDutiesThreeThree} newDateThree={newDateThree}/>

        <div className="education">
            <h3>Education</h3>
            <p className="school">{school}</p>
            <p className="degree">{degree}, ({year})</p>
            <p className="honors">{honors}</p>
            <p className="gpa">GPA: {gpa}</p>
        </div>
    </section>
  )
}

export default Resume