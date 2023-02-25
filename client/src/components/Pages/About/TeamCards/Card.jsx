import s from "./CardTeam.module.css"

const TeamCard = ({name, avatar, rol}) => {
    return (
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="card h-100 w-100">
                <img src={avatar} alt="avatar" class="card-img-top h-50"/>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <span class="card-subtitle mb-2 text-muted">{rol}</span>
                </div>
            </div>
        </div>
    )
};

export default TeamCard;