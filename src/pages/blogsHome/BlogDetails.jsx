import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './blog.css'

function BlogDetails() {
    const [blog, setBlog] = useState({});
    const {id}=useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`)
        .then((response) => {
            setBlog(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Failed to fetch blog")
        })
    }, [id])

  return (
    <div className='w-full flex flex-col gap-4 text-white' >
        <h1 className='text-2xl font-bold'>{blog.title}</h1>
        <div className="flex gap-4">
            <p>{blog.authors}</p>
            <p>{Date(blog.date)}</p>
        </div>
        <p className='text-white bg-[rgba(50,50,50,.3)] hover:bg-[rgba(50,50,50,.5)]  p-4 rounded-lg'>
            <pre className='whitespace-pre-wrap'>
                <div dangerouslySetInnerHTML={{ __html: blog.html }} />
            </pre>
        </p>
       
    </div>
  )
}

export default BlogDetails