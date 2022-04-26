import React, {useState, useEffect} from 'react'

export default function ListOfProjects() {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch()
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <>
            {skills.map(({atributos}) => 
            <Card 
                // TODO: Agregar atributos
            />)}
    </>
    )
}
