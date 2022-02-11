import React from 'react'
import Divider from './Divider'
import Job from './Job'

const ProfExp = ({jobOne, jobTwo, jobThree, company, title, dutiesOne, dutiesTwo, dutiesThree, date, newCompanyTwo, newTitleTwo, newDutiesTwoOne, newDutiesTwoTwo, newDutiesTwoThree, newDateTwo, newCompanyThree, newTitleThree, newDutiesThreeOne, newDutiesThreeTwo, newDutiesThreeThree, newDateThree}) => {
  return (
    <div className="experience">

        <h3>Work Experience</h3>
        <Divider />

        <Job job={jobOne} title={title} company={company} date={date} dutiesOne={dutiesOne} dutiesTwo={dutiesTwo} dutiesThree={dutiesThree} />

        { jobTwo ? 
            <Job job={jobTwo} title={newTitleTwo} company={newCompanyTwo} date={newDateTwo} dutiesOne={newDutiesTwoOne} dutiesTwo={newDutiesTwoTwo} dutiesThree={newDutiesTwoThree} /> : null }
        { jobThree ? 
            <Job job={jobThree} title={newTitleThree} company={newCompanyThree} date={newDateThree} dutiesOne={newDutiesThreeOne} dutiesTwo={newDutiesThreeTwo} dutiesThree={newDutiesThreeThree} /> : null }

    </div>
  )
}

export default ProfExp
