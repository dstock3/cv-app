import React from 'react'

const Job = ({job, title, company, date, dutiesOne, dutiesTwo, dutiesThree}) => {
  return (
    <div className={job}>
        <h4 className="title">{title}</h4>
        <div className="exp-subcontainer">
            <p className="company">{company}</p>
            <p className="date">{date}</p>
        </div>

        <ul className="duties">
            <li className="duties">{dutiesOne}</li>
            <li className="duties">{dutiesTwo}</li>
            <li className="duties">{dutiesThree}</li>
        </ul>
    </div>
  )
}

export default Job