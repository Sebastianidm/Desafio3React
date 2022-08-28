import React from 'react'
import { BaseColaboradores } from '../BaseColaboradores'
import { useState } from 'react'

const Body = () => { 
  const [nameColaborador, setNameColaborador] = useState("")
  const [emailColaborador , setEmailColaborador] = useState("")
  const [colab, setColab ] = useState(BaseColaboradores)

 const enviarFormulario = (e) => {
   e.preventDefault()
   setColab([...colab, {nombre: nameColaborador, correo: emailColaborador}])
 }  

 const capturarName =  (e) => {
   console.log(e.target.value)
 setNameColaborador(e.target.value)
   
 }

 const capturarEmail = (e) => {
  setEmailColaborador(e.target.value)

 }

  return (
    <div>
     <div className='bodyContainer'>
     <form onSubmit={enviarFormulario}>
     <h4>Nombre del Colaborador:</h4>
     <input  name='nameColaborador' onChange={capturarName}/>
     <h4>Correo del colaborador:</h4>
     <input name='emailColaborador' onChange={capturarEmail}/>
     <button className='btn'>Agregar colaborador</button>
     </form>
     <hr />
     <ul>
      {colab.map(cola => 
      <li key={cola.id}> <strong>Nombre:</strong> {cola.nombre} /  <strong>Correo:</strong> {cola.correo} </li>
      )}
     </ul>
     
     </div>   
    </div>
  )
}

export default Body