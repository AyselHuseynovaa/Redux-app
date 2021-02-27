// import React from "react";
// import { connect } from "react-redux";

// const Post = (props) => {
//   console.log(props);
//   const handleDelete = (id) => {
//     props.deletePost(id);
//   };
//   return (
//     <div>
//       {props.post ? (
//         <div>
//           <div>{props.post.title}</div>
//           <p>{props.post.content}</p>

//           <button onClick={() => handleDelete(props.post.id)}>delete</button>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// const mapStatetoProps = (state, ownProps) => {
//   let id = ownProps.match.params.post_id;
//   return {
//     post: state.posts.find((post) => post.id === id),
//   };
// };

// const mapDispatchtoProps = (dispatch) => {
//     return {
//       deletePost:(id)=>dispatch ({type:"DELETE_POST", id:id})
//     };
//   };
// export default connect(mapStatetoProps,mapDispatchtoProps)(Post);

import React , {Component} from "react";
import { connect } from "react-redux";
class Post extends Component{
    handleDelete=()=>{
this.props.deletePost(this.props.post.id)
    }
 render(){
     console.log(this.props)

     return(
         <div>
         {this.props.post?
            (<div>
                <div>{this.props.post.title}</div>
                <p>{this.props.post.content}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>)
            :
            (<div>
                Loading...
            </div>)
            }</div>
     )
 }
}

const mapStatetoProps = (state , ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
             post: state.posts.find(post => post.id === id),
      };
  };

  const mapDispatchtoProps=(dispatch)=>{
    return {
              deletePost:(id)=>{dispatch ({type:"DELETE_POST", id:id})}
            };
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(Post);
