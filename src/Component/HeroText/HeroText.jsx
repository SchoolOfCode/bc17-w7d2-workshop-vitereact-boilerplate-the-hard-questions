import styles from "./styles.module.css"

export default function HeroText( props ) {
  return(
  <>
      <section className = {styles.heroText}>
          <img className = {styles.otherHeroes} src = { props.imgSrc }/>
          <p><h3>{ props.title }</h3></p>
          <p className = "heroContent">{ props.content }</p>
      </section>
  </>
  )
}
