import React, {useState, useEffect} from 'react'
import SkillImg from '../SkillImg'
import {API_URL} from '../../Services/settings'



export default function ListOfSkills() {

    const [skills, setSkills] = useState([])

    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setSkills(data))
    }, [])

    return (
        <>
            {skills.map(({id, src, alt, className}) => 
            <SkillImg 
                key={id}
                className={className} 
                alt={alt} 
                src={src}
            />)}
    </>
    )
}
