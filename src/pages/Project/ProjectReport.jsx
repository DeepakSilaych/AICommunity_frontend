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

    if (!project) {
        return <div>Loading...</div>
    }
    return (
        <div className='w-full flex flex-col items-center gap-4 text-white'>
        { project.img &&
            <img
                src={baseUrl + project.img.split('/').slice(-1)[0]}
                alt='project'
                className='w-80 h-48 object-cover rounded-lg'
            />
        }
            <h1 className='text-2xl font-bold'>{project.title}</h1>
            <div className=''>
                <a className='px-2 border-[.1em] border-[rgba(255,255,255,0.2)] rounded-lg hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.5)]' href={project.link}>
                    Project Link
                </a>
            </div>
            <pre className='whitespace-pre-wrap'>
                {project.description}
            </pre>
        </div>
    )
}

export default ProjectReport
