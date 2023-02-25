import axios from 'axios';
import { useEffect, useState } from 'react';
import PaginationComp from '../../Pages/PaginationComp/PaginationComp';
import SearchBar from '../../Pages/SeachBar/SearchBar';
import VideoCard from '../VideoCard/VideoCard';
import s from './Students.module.css';

export default function Students(){
    const [videos, setVideos] = useState();
    const {REACT_APP_REST_API} = process.env;
    
    const getVideos = ()=>{
        if(videos!==undefined) return videos;
        axios.get(`${REACT_APP_REST_API}/courses`)
        .then(res=>setVideos(res.data.pagedArr));
    };

    useEffect(()=>{
        getVideos();
    },[videos]);

    return(
        <>
        <div className={s.container}>
            <article class="row g-3 col-12 col-md-12 col-lg-4 order-lg-1">
                <SearchBar />
            </article>
            <article class="row g-3 col-12 col-md-12 col-lg-8 ">
               <div className={s.videos}>
                {videos?.map(video=><VideoCard thumbnail={video.thumbnail}
                title={video.title}
                description={video.description}
                id={video._id}
             />)}
            </div> 
            </article>
        </div>
        <div className="row offset-2">
          <PaginationComp
            // totalItems={totalNews}
            // firstHandler={firstHandler}
            // prevHandler={prevHandler}
            // nextHandler={nextHandler}
            // lastHandler={lastHandler}
            // pages={pages}
            // itemsPerPage={newsPerPage}
            // currentPage={currentPage}
            // pageNumberLimit={pageNumberLimit}
            // maxPageNumberLimit={maxPageNumberLimit}
            // minPageNumberLimit={minPageNumberLimit}
          />
        </div>
        </>
        
    )
};