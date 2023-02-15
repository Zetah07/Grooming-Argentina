import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={props.image} alt={props.title} />
            <h2 className={style.title}>{props.title}</h2>
            <p className={style.description}>{props.description}</p>
        </div>
    )
}

export default Card;