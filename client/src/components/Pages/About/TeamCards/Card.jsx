import s from "./CardTeam.module.css"

const TeamCard = ({name, avatar, rol}) => {
    return (
        <div className={s.container}>
            <img src={avatar} alt="avatar" />
            <h2>{name}</h2>
            <span>{rol}</span>
        </div>
    )
};

export default TeamCard;