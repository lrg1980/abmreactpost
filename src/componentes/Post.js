import React, { Component } from 'react';

class Post extends Component {
     
     render() { 
          const { id, title } = this.props.info;
          return ( 
               <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>Acciones aquí</td>
               </tr>
               );
     }
}
 
export default Post;