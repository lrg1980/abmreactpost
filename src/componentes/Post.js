import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

     confirmarEliminar = () => {
          const { id } = this.props.info;
          
          swal.fire({
               title: 'Está seguro?',
               text: "No va a poder revertir la acción!",
               type: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
               if (result.value) {
                    this.props.borrarPost(id)
                    swal.fire(
                    'Eliminado!',
                    'Su entrada ha sido eliminada.',
                    'exitosamente'
                    )
               }
          })
     }
     
     
     render() { 
          const { id, title } = this.props.info;
          return ( 
               <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                         <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                         <button onClick={ this.confirmarEliminar } type="button" className="btn btn-danger">Borrar</button>
                    </td>
               </tr>
          );
     }
}
 
export default Post;