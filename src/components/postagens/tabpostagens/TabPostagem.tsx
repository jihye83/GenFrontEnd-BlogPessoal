import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import CarouselPost from '../carouselPost/CarouselPost';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar className='barraCor' position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre Mim" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <CarouselPost />
                    </Box>
                </TabPanel>
                <TabPanel className='fundo' value="2">
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h5" align="center" className="meunome">Ji hye Koo</Typography>
                    <Box className='assunto' alignItems='center' display="flex" justifyContent='center'>
                        <img className='foto' src="https://i.imgur.com/T3RvUYP.jpg" alt="" width="180" />
                        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                            Sou coreana, formada em design e em Analise Desenvolvimento de Sistemas.
                            No momento estou fazendo bootcamp da Generation Brasil, Java FullStack.
                            Gosto de ler livro, ver filme, viajar e conhecer lugares novos. Tenho um
                            cachorrinho que se chama CHEETOS. Mas o que mais eu gosto mesmo é CODAR.
                            Programar traz muito desafios e problemas, mas quando você consegue finalizar
                            e solucionar os problemas me traz uma alegria e satisfação. Acho que é isso
                            que me fez gostar e fixar na área de tecnologia. O meu sonho agora é poder
                            trabalhar na empresa, aprender e poder ajudar a empresa.
                        </Typography>
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem
