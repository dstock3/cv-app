import React, { useState, useEffect } from 'react'
import EdForm from './EdForm'
import GenForm from './GenForm'
import ProfForm from './ProfForm'
import Resume from './Resume'
import Favicon from '../assets/favicon.png'

const Main = () => {
    useEffect(()=> {
        const head = document.querySelector("head");
        const favIcon = document.createElement("link")
        head.appendChild(favIcon)
        favIcon.rel = "shortcut icon";
        favIcon.type = "image/png";
        favIcon.href = Favicon
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const [genInfo, setGenInfo] = useState({firstName: '', lastName: '', address: '', zip: '', city: '', state: '', email: '', phone: '', genClass: ''})

    const [edInfo, setEdInfo] = useState({school: '', degree: '', year: '', honors: '', gpa: ''})

    const [profInfo, setProfInfo] = useState({company: '', title: '',dutiesOne: '', dutiesTwo: '', dutiesThree: '', date: ''})

    const removeInfo = () => {
        setGenInfo({firstName: '', lastName: '', address: '', zip: '', city: '', state: '', email: '', phone: '', genClass: ''})
        setIsSubmitted(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <main className="section-container">
            <section className="form-container">
                <h1>Resume Builder</h1>

                <form className="resume-form" onSubmit={handleSubmit}>
                    <GenForm genInfo={genInfo} setGenInfo={setGenInfo}/>

                    <EdForm edInfo={edInfo} setEdInfo={setEdInfo} />

                    <ProfForm profInfo={profInfo} setProfInfo={setProfInfo} />

                    <div className="button-container">
                        <button className="submit" type="submit">Submit</button>
                        <button className="remove" onClick={removeInfo}>Clear</button>
                    </div>
                </form>
            </section>
            <section className="resume-container">
                <div className="preview-head-container">
                    <h2 className="preview">Preview</h2>
                </div>
                
                <Resume genInfo={genInfo} edInfo={edInfo} profInfo={profInfo} isSubmitted={isSubmitted} />
            </section>
        </main>
    )
}

export default Main