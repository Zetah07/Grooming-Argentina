import { Card, CardActionArea, CardMedia, CardContent, Typography, Container } from '@mui/material';
import style from './Card.module.css'

const Cards = ({imgUrl, name, body2}) => {
    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Container>
    )
}

export default Cards;