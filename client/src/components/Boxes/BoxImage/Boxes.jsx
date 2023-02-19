import Box from '@mui/material/Box';
// import s from './Boxes.module.css';

export default function BoxImage({src}){
  const boxStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: '300px', // altura opcional
    width: '500px', // largura opcional
  };
    return(
        <Box style={boxStyle}>
        {/* Contenido del box */}
        </Box>
    )
}