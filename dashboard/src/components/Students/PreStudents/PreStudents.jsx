import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import s from './PreStudents.module.css';

const PreStudents = ()=>{
    const [videos, setVideos] = useState();

    const getVideos = ()=>{
        if(videos!==undefined) return;
        axios.get(`/courses`)
        .then(res=>{
            setVideos(res.data.pagedArr);
        });
    };

    useEffect(()=>{
        getVideos();
    },[videos]);

    return(
        <>
        <div className={s.container}>
            <h1 className={s.title}>Cursos a los que podrías acceder si te conviertes en voluntario:</h1>
            <div className={s.videos}>
                {videos?.map(video=><VideoCard thumbnail={video.thumbnail}
                title={video.title}
                description={video.description}
             />)}
            </div> 
        </div>
        </>
        
    )
};

export default PreStudents;