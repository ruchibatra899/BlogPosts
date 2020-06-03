
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer=(state,action)=>{
  switch(action.type){
    case 'get_blogPosts':
      return action.payLoad
    case 'delete_blogPost':
      return state.filter((blogPost)=> blogPost.id!==action.payLoad);
    case 'add_blogPost' :
        return [...state,
          {id: Math.floor(Math.random()*9999) ,
            title : action.payLoad.title,
          content:action.payLoad.content
        }];
    case 'edit_blogPost':
      return state.map((blogPost)=>{
        if(blogPost.id===action.payLoad.id)
        return action.payLoad;
        else
        return blogPost;
      })
      default :
      return state;
  }

}
const addBlogPost = (dispatch)=>{
  // return (title,content,callback)=>{
  // dispatch({type: 'add_blogPost',payLoad:{title,content}});
  // callback();
  // };
  return async(title,content,callback)=>{
    await jsonServer.post('/blogposts',{title,content});
    callback();
  }
};
const deleteBlogPost = dispatch=>{
  return async (id)=>{
    
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: 'delete_blogPost', payLoad :id})
  };
}
const editBlogPost = dispatch=>{
  return async (title,content,id,callback)=>{
    await jsonServer.put(`/blogposts/${id}`,{title,content})
    // dispatch({type: 'edit_blogPost',payLoad:{title,content,id}});
    callback();
}};
const getBlogPosts =dispatch=>{
  return async()=>{
    const response=await jsonServer.get('/blogposts');
      dispatch({type:'get_blogPosts',payLoad:response.data})
  }
}


export const {Context, Provider}= createDataContext(
  blogReducer,{addBlogPost, deleteBlogPost,editBlogPost,getBlogPosts},[]
)
