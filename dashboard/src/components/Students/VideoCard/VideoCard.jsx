import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function VideoCard({title, description, thumbnail, id}){
    return(
        <Card style={{ width: '397px' }}>
        {id?<Link to={`/panel/cursos/${id}`}>
            <Card.Img variant="top" src={thumbnail} />  
        </Link>:<Card.Img variant="top" src={thumbnail} />}
        <Card.Body>
            <Card.Title style={{fontFamily: 'Gotham Rounded Bold', color: '#004b82'}}>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
        </Card>
    )
};