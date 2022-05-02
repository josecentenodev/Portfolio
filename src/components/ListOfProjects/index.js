import React, {useState, useEffect} from 'react'
import { API_PROJECTS_URL } from '../../Services/settings'
import Card from '../Card'

export default function ListOfProjects() {
    const [projects, setProjects] = useState([])



    useEffect(()=>{
        fetch(API_PROJECTS_URL)
        .then(res => res.json())
        .then(data => setProjects(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <>
            {projects.map(({id, name, description, tech, src, url}) => 
            <Card 
                key={id}
                name={name}
                description={description}
                tech={tech}
                src={src}
                url={url}
            />)}
    </>
    )
}
