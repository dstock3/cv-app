import React from 'react'

const Education = ({school, degree, year, honors, gpa}) => {
  return (
    <div className="education">
        <h3>Education</h3>
        <p className="school">{school}</p>
        <p className="degree">{degree}, ({year})</p>
        <p className="honors">{honors}</p>
        <p className="gpa">GPA: {gpa}</p>
    </div>
  )
}

export default Education