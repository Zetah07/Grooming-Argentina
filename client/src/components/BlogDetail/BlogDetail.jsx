import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from './BlogDetail.module.css';
import { getBlogByID } from '../../Redux/Actions';
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const NewDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const blogId = useSelector(state => state.blogId);
    useEffect(() => {
        dispatch(getBlogByID(id));
    }, [dispatch, id]);
    return (
        <div class="container" style={{display:'flex', minHeight:'90vh'}}>
            <div class="card" style={{display:'flex',justifyContent:'space-between', minHeight:'90vh'}}>
                <div class="card-body" style={{display:'flex', flexDirection:'column'}}>
                <h2 class="card-title">{blogId.title}</h2>
                    <p class="card-subtitle mb-2 text-muted">Author: {blogId.author}</p>
                    <p class="card-subtitle mb-2 text-muted">Subtitulo: {blogId.subtitle}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {blogId.createdAt}</p>
                    <p class="card-text">Contenido: {blogId.content}</p>
                    <div class="card-body" className={style.shareContainer} >
                        <h5 class="card-text">Compartir en:</h5>
                        <div className={style.buttons}>
                        <FacebookShareButton url={`http://localhost:3000/blog/${blogId._id}`} quote={blogId.title}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        {/* <FacebookMessengerShareButton url={`http://localhost:3000/blog/${blogId._id}`}>
                            <FacebookMessengerIcon size={40} round={true} />
                        </FacebookMessengerShareButton> */}
                        <LinkedinShareButton url={`http://localhost:3000/blog/${blogId._id}`} title={blogId.title}>
                            <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>
                        <TelegramShareButton url={`http://localhost:3000/blog/${blogId._id}`} title={blogId.title}>
                            <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>
                        <TwitterShareButton url={`http://localhost:3000/blog/${blogId._id}`} title={blogId.title}>
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={`http://localhost:3000/blog/${blogId._id}`} title={blogId.title}>
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDetails