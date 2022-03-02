import React, { useState } from 'react'

const ProfForm = ({profInfo, setProfInfo}) => {
    const [profClass, setProfClass] = useState('')

    const [placeholders, setPlaceholders] = useState({
        company: "Company",
        title: "Title",
        date: "Date of Employment",
        duties: "Duties"
    })

    const addProfInfo = () => {
        if (profInfo.company && profInfo.title && profInfo.date && profInfo.dutiesOne && profInfo.dutiesTwo && profInfo.dutiesThree) {
            setProfInfo({...profInfo, isValid: true})
        } else {
            setPlaceholders({...placeholders,
                company: "Required Field",
                title: "Required Field",
                date: "Required Field",
                duties: "Required Field"
            })
        }
    }

    return (
        <fieldset>
            <legend>Professional Experience</legend>

            <div className="experience-container">
                <div className="experience-subcontainer">
                    <div className="experience-sub-left">
                        <label htmlFor="company">Company:</label>
                        <input className={profClass} type="text" value={profInfo.company} name="company" placeholder={placeholders.company} onChange={e => setProfInfo({...profInfo, company: e.target.value}) }/>

                        <label htmlFor="title">Title:</label>
                        <input className={profClass} type="text" value={profInfo.title} name="title" placeholder={placeholders.title} onChange={e => setProfInfo({...profInfo, title: e.target.value}) }/>

                        <label htmlFor="date">Date of Employment:</label>
                        <input className={profClass} type="text" value={profInfo.date} name="date" placeholder={placeholders.date} onChange={e => setProfInfo({...profInfo, date: e.target.value}) }/>
                    </div>

                    <div className="experience-sub-right">
                        <label htmlFor="duties">Duties:</label>
                        <input type="text" value={profInfo.dutiesOne} name="duties" placeholder={placeholders.duties} onChange={e => setProfInfo({...profInfo, dutiesOne: e.target.value}) }/>

                        <label htmlFor="dutiestwo">Duties:</label>
                        <input type="text" value={profInfo.dutiesTwo} name="dutiestwo" placeholder={placeholders.duties} onChange={e => setProfInfo({...profInfo, dutiesTwo: e.target.value}) }/>

                        <label htmlFor="dutiesthree">Duties:</label>
                        <input type="text" value={profInfo.dutiesThree} name="dutiesthree" placeholder={placeholders.duties} onChange={e => setProfInfo({...profInfo, dutiesThree: e.target.value}) }/>
                    </div>
                </div>

                <button className="add-info-button" id="add-prof-info" onClick={addProfInfo}>Add New</button>
            </div>
        </fieldset>
    )
}

export default ProfForm