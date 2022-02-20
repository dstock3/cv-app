import React, {useState} from 'react'
import GenForm from './GenForm'

const Main = () => {
    const [genInfo, setGenInfo] = useState({firstName: '', lastName: '', address: '', zip: '', zip: '', city: '', state: '', email: '', phone: '', genClass: ''})

    return (
        <main className="section-container">
            <section className="form-container">
                <h1>Resume Builder</h1>
                <form className="resume-form">
                    <GenForm genInfo={genInfo, setGenInfo}/>


                </form>
            </section>

        </main>
    )
}

export default Main