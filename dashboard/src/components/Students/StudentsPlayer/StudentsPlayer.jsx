import React, { useState } from "react";
import ReactPlayer from 'react-player';
import './studentsPlayer.css';

export default function StudentsPlayer(){
    const [title, setTitle] = useState('');

    const handleReady = (player)=>{
        setTitle(player.getInternalPlayer().element.title);
    };
    return(
        <>
        <div className='player-wrapper'>
            <ReactPlayer className='react-player'
                url="https://vimeo.com/798384070?access_token="
                controls 
                width='98%'
                height='100%'
                onReady={handleReady}
            />
            
        </div>
        <h1 className="title">{title}</h1>
        </>
        
            
    )
};