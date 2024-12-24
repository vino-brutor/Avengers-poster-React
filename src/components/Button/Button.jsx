import style from './Button.module.css'

export default function Button(){
    return(
        <button className={style.buttonStyle + ' btn btn-secondary'}>Compre agora</button>
    )
}