import React from 'react'

const GenInfo = ({address, city, state, zip, email, phone}) => {
  return (
    <section className="general-info">
        <p className="address">{address}</p>
        <p className="city-state">{city} {state} {zip}</p>
        <p className="email">{email}</p>
        <p className="phone">{phone}</p>
    </section>
  )
}

export default GenInfo