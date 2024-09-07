import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectReport() {
    const [project , setProject] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/projects/${id}`)
        .then((respose)=>{
            setProject(respose.data)
            console.log(respose.data)
        })
        .catch((error)=>{
            console.log(error)
            alert("Failed to fetch project")
        })
    } , [id])
  return (
    <div className='w-full flex flex-col items-center gap-4 text-white'>
        <h1 className='text-2xl font-bold'>{project.title}</h1>
        <div className=''><a className='px-2 border-[.1em] border-[rgba(255,255,255,0.2)] rounded-lg' href={project.link}>Project Link</a></div>
        <pre className='whitespace-pre-wrap'>
        {project.description}
        </pre>
    </div>
  )
}

export default ProjectReport
