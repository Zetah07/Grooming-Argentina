import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function VideoCard({title, description, thumbnail, id}){
    return(
        <Card style={{ width: '397px' }}>
        <Link to={`/estudiantes/${id}`}>
            <Card.Img variant="top" src={thumbnail} />  
        </Link>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
        </Card>
    )
};