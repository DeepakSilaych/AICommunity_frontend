import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, baseUrl } from '../../config';


function Project() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${apiUrl}projects/`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className=" flex  flex-wrap gap-4 justify-center">
            {
                data.map((project) => {
                    return (

                        <Link to={'/project/' + project.id} className="text-white bg-gray-800 p-4 rounded-lg w-80" key={project.id}>
                            <img
                                src={baseUrl + project.img.split('/').slice(-1)[0]}
                                alt={project.name}
                                className='w-full h-48 object-cover rounded-lg'
                            />
                            <div className="text-white p-4 rounded-lg flex flex-col gap-4" key={project.name}>
                                <span className='flex flex-col w-full'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <hr className='bg-white opacity-20 my-2' />
                                    <p className=''>{project.description.substring(0, 100)}...</p>
                                </span>



                            </div>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default Project
