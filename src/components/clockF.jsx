import React, { useState, useEffect } from 'react';

const ClockF = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Kike',
        apellidos: 'Páez Pozo',
      }

      const [user, setUser] = useState(defaultState)

      useEffect(() => {
        const intervalAge = setInterval(() => {
            actualiceUser();
        }, 1000)
        return () => {
            clearInterval(intervalAge)
        }
      })

      const actualiceUser = () => {
        return setUser({
            fecha: new Date(),
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos,
        })
      }

    return (
        <div>
            <h2>Hora Actual: { user.fecha.toLocaleTimeString() }</h2>
            <h3>{ user.nombre } { user.apellidos }</h3>
            <h1>Edad: { user.edad } </h1>
        </div>
    );
}

export default ClockF;
