import Box from '@mui/material/Box';
import s from './Boxes.module.css';

export default function BoxColor({Icon1, name, width, height}){
    return(
        <Box
      sx={{
        width: `${width}px`,
        height: `${height}px`,
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