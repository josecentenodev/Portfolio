import React from 'react'

export default function SkillImg(props) {
  return (
    <img
        src={props.src}
        alt={props.altText}
        className={props.className}
    />
  )
}
