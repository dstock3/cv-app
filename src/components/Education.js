import React from 'react'

const Education = ({school, degree, major, year, honors, gpa}) => {
  return (
    <div className="education">
        <h3>Education</h3>
        { school ? <p className="school">{school}</p> : null }
        { degree ? <p className="degree">{degree}, ({year})</p> : null }
        { major ? <p className="major">{major}</p> : null }
        { honors ? <p className="honors">{honors}</p> : null }
        { gpa ? <p className="gpa">GPA: {gpa}</p> : null }
    </div>
  )
}

export default Education