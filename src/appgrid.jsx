import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

function App() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 1
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 2
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 3
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 4
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 5
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 6
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 7
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 8
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 9
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 10
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 11
                    </Button>
                </Grid>
                <Grid Button size = {{xs:12, sm: 6, md:4, lg:3, xl:2}}>
                    <Button variant='contained' size='large' sx={{ color: 'orange', backgroundColor: 'black' }}>
                        Botón 12
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default App