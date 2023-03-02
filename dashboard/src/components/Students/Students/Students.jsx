import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PaginationComp from '../../pages/PaginationComp/PaginationComp';
import VideoCard from '../VideoCard/VideoCard';
import s from './Students.module.css';

export default function Students(){
    const [videos, setVideos] = useState();
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');

    
    const getVideos = ()=>{
        axios.get(`/courses?page=${page}&order=${asc?'ascending':'descending'}`)
        .then(res=>{
            setVideos(res.data.pagedArr);
            setMaxPage(res.data.maxPage);
        });
    };
    const firstHandler = (firstPage)=>setPage(firstPage+1);

    const prevHandler = ()=>{
        if(page<=1) return;
        setPage(page-1);
    }

    const nextHandler = ()=>{
        if(page>=maxPage) return;
        setPage(page+1);
    }

    const lastHandler = (lastPage)=>setPage(lastPage+1);

    const changeOrder = ({target})=>{
        if(!target.checked) return;
        setAsc(!asc)
    };

    const searchHandler = ({target})=>setSearch(target.value);

    const submitHandler = ()=>{
        if(search==='') return;
        axios.get(`/courses/${search}`)
        .then(res=>{
            setVideos([res.data]);
            setMaxPage(1);
        });
    };

    const clearHandler = ()=>setSearch('');

    const pages = (numberPage) => {
        setPage(numberPage+1);
      };

    useEffect(()=>{
        getVideos();
    },[page, asc, search]);

    return(
        <>
        <div className={s.container}>
            <article class="row g-3 col-12 col-md-12 col-lg-4 order-lg-1">
                <div>
                <Stack>
                    <Form.Control id="search" onChange={searchHandler} value={search} className="me-auto" placeholder="Buscar..." />
                    <Button variant="secondary" onClick={submitHandler} value={search}>Buscar</Button>
                    <div className="vr" />
                    <Button variant="outline-danger" onClick={clearHandler}>Limpiar</Button>
                </Stack>
                    <h2 className={s.title}>Orden</h2>
                    <div>
                      <Form.Check
                        disabled={search!==''?true:false}
                        inline
                        type='checkbox'
                        id='asc'
                        label='Ascendente'
                        checked={asc}
                        onChange={changeOrder}
                    />  
                    </div>
                    <Form.Check 
                        disabled={search!==''?true:false} 
                        inline
                        type='checkbox'
                        id='des'
                        label='Descendente'
                        checked={!asc}
                        onChange={changeOrder}
                    />
                </div>
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
            totalItems={maxPage*6}
            firstHandler={firstHandler}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            lastHandler={lastHandler}
            pages={pages}
            itemsPerPage={6}
            currentPage={page-1}
            pageNumberLimit={6}
            maxPageNumberLimit={maxPage}
            minPageNumberLimit={0}
          />
        </div>
        </>
        
    )
};