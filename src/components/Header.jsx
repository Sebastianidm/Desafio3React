import React from 'react'
import { BaseColaboradores } from '../BaseColaboradores'
import { useState } from 'react'

const Header = () => {
  const [inputBusqueda, setInputBusqueda] = useState("")
  console.log(inputBusqueda)
 
  // const busqueda = (data) => {
  //   return BaseColaboradores.filter((item) => item.nombre.toLowerCase().includes(inputBusqueda))
  // }

  return (
    <div>
        <div className='headerContainer'>
        <div>
            <h1>Base de datos colaboradores</h1>
            <input type="text"
              placeholder='Busca un colaborador'
              className='inputHeader' 
              onChange={e=> setInputBusqueda(e.target.value)} />
              <br />

            <ul >
            {BaseColaboradores.filter((val)=> {
              if(inputBusqueda == "") {
                return val 
              }else if (val.nombre.toLowerCase().includes(inputBusqueda.toLowerCase())) {
                return val
              }
            }).map(cola => 
            <li className='ulfiltrados' key={cola.id}> <strong>Nombre:</strong> {cola.nombre} /  <strong>Correo:</strong> {cola.correo} </li>
            )}
              
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header