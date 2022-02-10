import React, { Component } from 'react'

class ProfExp extends Component {
    render() {
        const {jobOne, jobTwo, jobThree, company, title, dutiesOne, dutiesTwo, dutiesThree, date, newCompanyTwo, newTitleTwo, newDutiesTwoOne, newDutiesTwoTwo, newDutiesTwoThree, newDateTwo, newCompanyThree, newTitleThree, newDutiesThreeOne, newDutiesThreeTwo, newDutiesThreeThree, newDateThree} = this.props
        return (
            <section className="experience">
                <h3>Work Experience</h3>
                <div className={jobOne}>
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

                { jobTwo ?
                    <div className={jobTwo}>
                        <h4 className="title">{newTitleTwo}</h4>
                        <p className="company">{newCompanyTwo}</p>
                        <p className="date">{newDateTwo}</p>

                        <ul className="duties">
                            <li className="duties">{newDutiesTwoOne}</li>
                            <li className="duties">{newDutiesTwoTwo}</li>
                            <li className="duties">{newDutiesTwoThree}</li>
                        </ul>
                    </div>
                : null }

                { jobThree ?
                    <div className={jobThree}>
                        <h4 className="title">{newTitleThree}</h4>
                        <p className="company">{newCompanyThree}</p>
                        <p className="date">{newDateThree}</p>

                        <ul className="duties">
                            <li className="duties">{newDutiesThreeOne}</li>
                            <li className="duties">{newDutiesThreeTwo}</li>
                            <li className="duties">{newDutiesThreeThree}</li>
                        </ul>
                    </div>
                : null }

            </section>
        )
    }
}

export default ProfExp
