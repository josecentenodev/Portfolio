import React, {useState, useEffect} from 'react'
import { API_PROJECTS_URL } from '../../Services/settings'

export default function ListOfProjects() {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch(API_PROJECTS_URL)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <>
            {projects.map(({id, name, description, tech, src}) => 
            <Card 
                key={id}
                name={name}
                description={description}
                tech={tech}
                src={src}
            />)}
    </>
    )
}
