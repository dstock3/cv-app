import React, { useState } from 'react'
import EdForm from './EdForm'
import GenForm from './GenForm'
import ProfForm from './ProfForm'

const Main = () => {
    const [genInfo, setGenInfo] = useState({firstName: '', lastName: '', address: '', zip: '', zip: '', city: '', state: '', email: '', phone: '', genClass: ''})

    const [edInfo, setEdInfo] = useState({school: '', degree: '', year: '', honors: '', gpa: ''})

    const [profInfo, setProfInfo] = useState({company: '', title: '',dutiesOne: '', dutiesTwo: '', dutiesThree: '', date: ''})

    return (
        <main className="section-container">
            <section className="form-container">
                <h1>Resume Builder</h1>

                <form className="resume-form">
                    <GenForm genInfo={genInfo} setGenInfo={setGenInfo}/>

                    <EdForm edInfo={edInfo} setEdInfo={setEdInfo} />

                    <ProfForm profInfo={profInfo} setProfInfo={setProfInfo} />
                </form>
            </section>
        </main>
    )
}

export default Main