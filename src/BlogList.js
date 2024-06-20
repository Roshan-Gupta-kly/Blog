import React from 'react'
import { Link } from 'react-router-dom'

function BlogList(props) {

    // const blogs = props.blogs;
    // const title = props.title;

    // another way to access props within one line. this is known as destructing
    const {blogs, title, handleDelete} = props


  return (
    <div className='blog-list'>
        <h2>{ title }</h2>
        {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}> 
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          </Link>
          
        </div>
      ))}
      
    </div>
  )
}

export default BlogList
