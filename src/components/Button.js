import React from 'react'

export default function Button (props) {
  return (
    <>
      <button className={props.css}>{props.buttonText}</button>
    </>
  )
}
