import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Member.css';
import { Linkedin, Github } from 'lucide-react';

function Member() {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/member/${id}`)
            .then((response) => {
                setMember(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to fetch Member Details");
            });
    }, [id]);

    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <div className='member'>
            <h1>{member.name}</h1>
            <div className='member-details'>
                <img src={"http://localhost:8000/" + member.pic} alt={member.name} />
                <p><strong>Position:</strong> {member.position === '1' ? 'Founder' : member.position === '2' ? 'Manager' : member.position === '3' && 'Convener'}</p>
                <p><strong>Department:</strong> {member.department}</p>
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>Contact:</strong> {member.contact}</p>
                <p><strong>Year:</strong> {member.year}</p>
                <p><strong>Description:</strong> {member.description}</p>
                <span>
                    <a href={member.linkedin} target='_blank' rel='noreferrer'>
                        <Linkedin />
                    </a>
                    <a href={member.github} target='_blank' rel='noreferrer'>
                        <Github />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Member;