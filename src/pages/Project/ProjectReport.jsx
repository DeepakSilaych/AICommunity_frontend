import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiUrl, baseUrl } from '../../config';

function ProjectReport() {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${apiUrl}projects/${id}`)
            .then((respose) => {
                setProject(respose.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])
    return (
        <div className='w-full flex flex-col items-center gap-4 text-white'>
            <img
                src={baseUrl + project.img.split('/').slice(-1)[0]}
                alt={project.name}
                className='w-full h-28'
            />
            <h1 className='text-2xl font-bold'>{project.title}</h1>
            <div className=''><a className='px-2 border-[.1em] border-[rgba(255,255,255,0.2)] rounded-lg' href={project.link}>Project Link</a></div>
            <pre className='whitespace-pre-wrap'>
                {project.description}
            </pre>
        </div>
    )
}

export default ProjectReport
