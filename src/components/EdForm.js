import React, { useState, useEffect } from 'react'

const EdForm = ({edInfo, setEdInfo}) => {
    const [edClass, setEdClass] = useState('')

    const [placeholders, setPlaceholders] = useState({
        school: "University", 
        degree: "Degree", 
        year: "Graduation Date",
        honors: "Honors",
        gpa: "Grade Point Average"
    })

    const addEdInfo = () => {
        if (edInfo.school && edInfo.degree && edInfo.year) {
            setEdInfo({...edInfo, isValid: true})
        } else {
            setEdClass("error")
            setPlaceholders({
                school: "Required Field",
                degree: "Required Field",
                year: "Required Field"
            })
        }

    }

    return (
        <fieldset>
            <legend>Education</legend>
            <div className="education-container">
                <div className="education-subcontainer-left">
                    <label htmlFor="school">School:</label>
                    <input className={edClass} type="text" value={edInfo.school} name="school" placeholder={placeholders.school} onChange={e => setEdInfo({...edInfo, school: e.target.value})} />

                    <label htmlFor="degree">Degree:</label>
                    <input className={edClass} type="text" value={edInfo.degree} name="degree" placeholder={placeholders.degree} onChange={e => setEdInfo({...edInfo, degree: e.target.value})} />

                    <label htmlFor="year">Year of Completion:</label>
                    <input className={edClass} type="text" value={edInfo.year} name="year" placeholder={placeholders.year} onChange={e => setEdInfo({...edInfo, year: e.target.value})} />
                </div>
                <div className="education-subcontainer-right">
                    <label htmlFor="honors">Honors:</label>
                    <input type="text" value={edInfo.honors} name="honors" placeholder={placeholders.honors} onChange={e => setEdInfo({...edInfo, honors: e.target.value})} />

                    <label htmlFor="gpa">GPA:</label>
                    <input className={edClass} type="text" value={edInfo.gpa} name="gpa" placeholder={placeholders.gpa} onChange={e => setEdInfo({...edInfo, gpa: e.target.value})} />
                </div>
            </div>

            <button className="add-info-button" id="add-ed-info" onClick={addEdInfo}>+</button>
        </fieldset>
    )
}

export default EdForm