import React, { Component } from 'react';
class EditarPost extends Component {

     // Crear los refs
     tituloRef = React.createRef();
     entradaRef = React.createRef();

     editarPost = (e) => {
          e.preventDefault();

          // leer los refs
          const post = {
               title: this.tituloRef.current.value,
               body: this.entradaRef.current.value,
               userId: 1,
               id: this.props.post.id
          }
          //console.log(post);
          // enviar por props o petición de axios
          this.props.editarPost(post);
     }

     cargarFormulario = () => {
          if (!this.props.post) return null;

          const { title, body } = this.props.post;
          return (
               <form onSubmit={this.editarPost} className="col-8">
                    <legend className="text-center">Editar entrada</legend>
                    <div className="form-group">
                         <label>Título de la entrada</label>
                         <input type="text" className="form-control" ref={this.tituloRef} defaultValue={title} />
                    </div>
                    <div className="form-group">
                         <label>Contenido</label>
                         <textarea className="form-control" ref={this.entradaRef} defaultValue={body}>
                         </textarea>
                    </div>
                    <button type="submit" className="btn btn-warning">Guardar cambios</button>
               </form>
          )
     }
     
     render() {
          return (
               <React.Fragment>
                    {this.cargarFormulario()}
               </React.Fragment>
           );
     }
}
 
export default EditarPost;