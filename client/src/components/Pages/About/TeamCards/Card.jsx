import s from "./CardTeam.module.css"

const TeamCard = ({name, avatar, rol}) => {
    return (
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div class="container-fluid" className={s.container}>
                <div  class="container-fluid" className={s.imgContainer}>
                    <img class="img-fluid" width="180px" height="180px" src={avatar} alt="avatar"/>
                </div>
                <div class="container-fluid">
                    <div className={s.bodycss}>
                        <h2 class="card-title">{name}</h2>
                        <span class="card-subtitle mb-2">{rol}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeamCard;