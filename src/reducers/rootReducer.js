// const initialState = {
//   posts: [
//     { id: "1", title: "1st post", content: "this a post" },
//     { id: "2", title: "2nd post", content: "this a post" },
//     { id: "3", title: "3th post", content: "this a post" },
//   ],
// };

// const rootReducer=(state = initialState, action)=> {
// switch(action.type){
   
//     case "DELETE_POST":
//     const newState=state.posts.filter(post=>post.id!==action.id)
//     return {...state,
//         posts:newState}
        
// default:
//     return state
// }
// }
// export default rootReducer;

const initialState={
    users:[],
    posts:[
    { id: "1", title: "1st post", content: "this is a post" },
    { id: "2", title: "2nd post", content: "this is second post" },
    { id: "3", title: "3th post", content: "this is third post" }
    ]
}
const rootReducer=(state=initialState ,action)=>{
    switch(action.type){
   
            case "DELETE_POST":
            const newState=state.posts.filter(post=>post.id!==action.id)
            return {...state,
                posts:newState}
                
        default:
            return state
        }
}
export default rootReducer;
