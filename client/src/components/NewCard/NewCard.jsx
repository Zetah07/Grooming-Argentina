import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea, Grid } from "@mui/material"

const NewCard = ({ image, title, description, date, categories }) => {
    return (<Grid item xs={5} md={5} lg={5}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component='img' height='250' image={image} alt={title} />
                <CardContent>
                    <Typography variant='p' component='div'>
                        Categorias:
                    </Typography>
                    {categories.map(category => {
                        return <Typography variant='p' component='div'>
                            {category}
                        </Typography>
                    })}
                    <Typography gutterBottom variant='h4' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='p' component='div'>
                        Publicado:
                    </Typography>
                    <Typography variant='p' component='div'>
                        {date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='text' color='primary' href="https://www.google.com">Leer mas...</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    </Grid>)
}

export default NewCard;