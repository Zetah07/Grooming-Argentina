import VideoCard from '../VideoCard/VideoCard';
import s from './Students.module.css';

export default function Students(){
    return(
        <div>
            <h1>Bienvenido a nuestra palataforma de aprendizaje</h1>
            <div className={s.videos}>
                <VideoCard />
            </div>
        </div>
    )
};