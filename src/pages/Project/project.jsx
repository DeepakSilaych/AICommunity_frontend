import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect , useState} from "react";
import axios from "axios";

function Project() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/projects/')
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        }) 
        .catch((error) => {
            console.log(error);
            alert("Failed to fetch projects");
        }); 
    },[]);
  return (
    <div className=" flex  flex-wrap gap-4 justify-center">
        {
            data.map((project) => {
                return (
                    
                    <Link to={'/project/' + project.id} className="text-white bg-gray-800 p-4 rounded-lg w-80" key={project.id}>
                        <img 
                                    src={`http://localhost:8000${project.img}`}
                                    alt={project.name} 
                                    className = 'w-full h-28'
                                />
                        <div className="text-white hover:bg-[rgba(50,50,50,.5)]  p-4 rounded-lg flex flex-col gap-4" key={project.name}>
                            <span className='flex flex-col w-1/2'>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <p className=''>{project.description}</p>
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
