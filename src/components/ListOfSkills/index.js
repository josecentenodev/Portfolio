import React from 'react'
import SkillImg from '../SkillImg'

export default function ListOfSkills({skills}) {
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
