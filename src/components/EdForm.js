import React, { useState, useRef, useEffect } from 'react'

const EdForm = ({edInfo, setEdInfo}) => {
    const [edClass, setEdClass] = useState('')

    const addEdInfo = () => {

    }

    return (
        <fieldset>
            <legend>Education</legend>
            <div className="education-container">
                <div className="education-subcontainer-left">
                    <label htmlFor="school">School:</label>
                    <input className={edClass} type="text" value={school} name="school" placeholder={schoolPlaceholder} onChange={e => setEdInfo({...edInfo, school: e.target.value})} />

                    <label htmlFor="degree">Degree:</label>
                    <input className={edClass} type="text" value={degree} name="degree" placeholder={degreePlaceholder} onChange={e => setEdInfo({...edInfo, degree: e.target.value})} />

                    <label htmlFor="year">Year of Completion:</label>
                    <input className={edClass} type="text" value={year} name="year" placeholder={yearPlaceholder} onChange={e => setEdInfo({...edInfo, year: e.target.value})} />
                </div>
                <div className="education-subcontainer-right">
                    <label htmlFor="honors">Honors:</label>
                    <input type="text" value={honors} name="honors" placeholder='Honors' onChange={this.changeHonorsHandler} />

                    <label htmlFor="gpa">GPA:</label>
                    <input className={edClass} type="text" value={gpa} name="gpa" placeholder={gpaPlaceholder} onChange={e => setEdInfo({...edInfo, gpa: e.target.value})} />
                </div>
            </div>

            <button className="add-info-button" id="add-ed-info" onClick={()=> addEdInfo}>+</button>
        </fieldset>
    )
}

export default EdForm