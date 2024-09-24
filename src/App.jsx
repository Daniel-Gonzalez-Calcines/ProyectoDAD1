import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

  function rascarperro() {
    setCount(count + 1)
  }

  const datos = {
    animal: 'perro',
    image: './public/descarga.webp',
  }

  return (
    <>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <h1>Soy un {datos.animal}</h1>
          <img className='avatar' src={datos.image} alt='imagen' style={{ width: 200, height: 200 }} />

          <h1></h1>

          <ThemeProvider theme={theme}>
            <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }} onClick={rascarperro}>
              Me has rascado {count} veces
            </Button>
          </ThemeProvider>
        </Stack>

      </div>
    </>
  )
}

export default App

/*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  export default function ResponsiveStack() {
    return (
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    );
  }*/
