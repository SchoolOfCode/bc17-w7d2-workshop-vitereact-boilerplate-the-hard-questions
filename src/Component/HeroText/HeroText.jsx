import { useState } from 'react'
import reactLogo from './assets/react.svg'

export default function HeroText( props ) {
  return(
  <>
      <section className = "heroText">
          <img className = "other-heroes" src = { props.imgSrc }/>
          <p><h3>{ props.title }</h3></p>
          <p className = "heroContent">{ props.content }</p>
      </section>
  </>
  )
}
