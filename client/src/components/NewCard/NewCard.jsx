import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

const NewCard = (props) => {
    return <Box width='400px'>
        <Card>
            <CardMedia component='img' height='180px' image={props.image} alt={props.title} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Compartir</Button>
                <Button size='small'>Leer más...</Button>
            </CardActions>
        </Card>
    </Box>
}

export default NewCard;