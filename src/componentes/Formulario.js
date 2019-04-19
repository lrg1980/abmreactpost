import React, { Component } from 'react';
class Formulario extends Component {

     // Crear los refs
     tituloRef = React.createRef();
     entradaRef = React.createRef();

     crearPost = (e) => {
          e.preventDefault();

          // leer los refs
          const post = {
               title: this.tituloRef.current.value,
               body: this.entradaRef.current.value,
               userId: 1
          }
          //console.log(post);
          // enviar por props o petición de axios
          this.props.crearPost(post);
     }
     
     render() { 
          return ( 
               
               <form onSubmit={this.crearPost} className="col-8">
                    <legend className="text-center">Crear nueva entrada</legend>
                    <div className="form-group">
                         <label>Título de la entrada</label> 
                         <input type="text" className="form-control" ref={this.tituloRef} placeholder="Titulo de la Entrada" />
                    </div>
                    <div className="form-group">
                         <label>Contenido</label> 
                         <textarea className="form-control" ref={this.entradaRef}placeholder="Contenido...">
                         </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear</button>
               </form>
               
           );
     }
}
 
export default Formulario;