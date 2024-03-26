import style from "./Menu.module.css"

export default function Menu(){
    return(
        <nav className={style.navBar}>
           <p><a href={'/'}>Nome</a></p>
           <p><a href={'/'}>Calculos</a></p>
           <p><a href={'/contact'}>Contato</a></p>
        </nav>
    )
}