import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import s from './VideoCard.module.css';

export default function VideoCard(){
    return(
        <Card>
            <Card.Body>
                <ReactPlayer
                    url="https://vimeo.com/798384070?access_token="
                    width='98%'
                    height='100%'
                    muted
                />
            </Card.Body>
            <Card.Title>Video Card</Card.Title>
        </Card>
    )
};