// import React from "react";
// import { connect } from "react-redux";
// const Home = (props) => {

//   return (
//     <div>
//       {
//           props.posts?(
//               <div>

//                  { props.posts.map(post=>(
//                     <div key={post.id}>
//                         {post.title}
//                     </div>
//                   ))}
//               </div>
//           ):(
//               <div>
//              Loading...
//           </div>)
//       }
//     </div>
//   );
// };
// const mapStatetoProps = (state) => {
//   return {
//        posts: state.posts
//     };
// };

// export default connect(mapStatetoProps)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <div>
        {
            posts ? (
          posts.map((post) => {
            return <div key={post.id}>{post.title}</div>;
          })
        ) : (
          <div>Loading...</div>
        )
        }
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStatetoProps)(Home);
