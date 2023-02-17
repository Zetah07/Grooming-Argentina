import Box from '@mui/material/Box';
import s from './Boxes.module.css';

export default function Boxes({Icon1, name}){
    return(
        <Box
      sx={{
        width: 150,
        height: 160,
        marginBottom: 1,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Icon1 className={s.icon} />
      <h1 className={s.tittle}>{name}</h1>
    </Box>
    )
}