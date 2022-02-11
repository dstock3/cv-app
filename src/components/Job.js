import React from 'react'

const Job = ({job, title, company, date, dutiesOne, dutiesTwo, dutiesThree}) => {
  return (
    <div className="job-container">
        <div className="exp-subcontainer">
            <h4 className="title">{title}</h4>
            <p className="company">{company}</p>
            <p className="date">{date}</p>
        </div>
        
        <ul className="duties">
            <li className="duties-item">{dutiesOne}</li>
            <li className="duties-item">{dutiesTwo}</li>
            <li className="duties-item">{dutiesThree}</li>
        </ul>
    </div>
  )
}

export default Job