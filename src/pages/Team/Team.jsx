import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Linkedin, Github } from 'lucide-react';

function Team() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/member/')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch team data");
      });
  }, []);

  return (
    <div className='w-full flex flex-col p-10 gap-4 text-white'>
      <h1 className='text-4xl font-bold'>Our Team</h1>
      {Object.keys(data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        Object.keys(data).map((batch) => (
          <div key={batch} className='flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold'>{batch}</h2>
            {data[batch].sort((b,a) => a.priority - b.priority).map((member) => (
              <div className='flex flex-col md:flex-row gap-4 bg-[rgba(50,50,50,.3)] hover:bg-[rgba(50,50,50,.5)] p-4 rounded-lg' key={member.name}>
                <div className='w-40 h-40'>
                  <img src={member.pic ? "http://localhost:8000/" + member.pic : '/path/to/default-image.jpg'} alt={member.name} className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='team-member-details'>
                  <h3 className='text-xl font-bold'>{member.name}</h3>
                  <p>
                    {member.position}
                  </p>
                  {member.phone && <p>{member.phone}</p>}
                  {member.email && <p>{member.email}</p>}
                  <span className='flex gap-4'>
                    {member.linkedin && (<a href={member.linkedin} target='_blank' rel='noreferrer'><Linkedin /></a>)}
                    {member.github && (<a href={member.Github} target='_blank' rel='noreferrer'><Github /></a>)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Team;
