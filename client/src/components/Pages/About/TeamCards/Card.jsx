import s from "./CardTeam.module.css"

const TeamCard = ({name, avatar, rol}) => {
    return (
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className={s.container}>
                <img className={s.avatarIMG} src={avatar} alt="avatar"/>
                <div class="card-body">
                    <div className={s.bodycss}>
                        <h2 class="card-title">{name}</h2>
                        <span class="card-subtitle mb-2 text-muted">{rol}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeamCard;