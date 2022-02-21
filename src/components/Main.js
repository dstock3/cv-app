import React, { useState } from 'react'
import EdForm from './EdForm'
import GenForm from './GenForm'

const Main = () => {
    const [genInfo, setGenInfo] = useState({firstName: '', lastName: '', address: '', zip: '', zip: '', city: '', state: '', email: '', phone: '', genClass: ''})

    const [edInfo, setEdInfo] = useState({school: '', degree: '', year: '', honors: '', gpa: ''})

    return (
        <main className="section-container">
            <section className="form-container">
                <h1>Resume Builder</h1>

                <form className="resume-form">

                    <GenForm genInfo={genInfo} setGenInfo={setGenInfo}/>

                    <EdForm edInfo={edInfo} setEdInfo={setEdInfo} />


                </form>
            </section>

        </main>
    )
}

export default Main