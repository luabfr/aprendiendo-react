//Seccion 3, clase 15
//Props por defecto
import React , { Component } from 'react'




class MiTitle extends Component{
  render(){
    // En este caso, no existe valor asignado al props.text, entonces, cuando se renderice el <h1> estará vacío.
    // Para que las props tengan un valor por defaul, existen las .defaultProps
    return <h1>{this.props.miTexto}</h1>
  }
}

//defaultProps: Le pasamos un objeto indicando que valor por defecto queremos para cada props.
MiTitle.defaultProps = {
  miTexto : 'Titulo por default'
}



class OtroApp extends Component{
  render(){
    return(
      <div className="OtroApp">
        <MiTitle miTexto='Otro titulo desde props' />
      </div>
    )
  }
}

export default OtroApp