import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CarouselPost() {
    let history = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            })
            history('/login')
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPostagens, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [postagens.length])

    const loading = postagens.length === 0 && <span className="loader">L &nbsp; ading</span>

    const carousel = postagens.map(postagem => (
        <Box m={2} >
            <Card variant="outlined" className='postagens'>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Postagens
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {postagem.titulo}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {postagem.texto}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {postagem.tema?.descricao}
                    </Typography>

                    <Typography>
                        {new Date(Date.parse(postagem.data)).toLocaleDateString('pt-br')}
                    </Typography>

                    <Typography variant="body2" component="p">
                        Autor: {postagem.usuario?.nome}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
                        <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    atualizar
                                </Button>
                            </Box>
                        </Link>
                        <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                                    deletar
                                </Button>
                            </Box>
                        </Link>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    ))

    const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 5
        }
    }

    return (
        <>
            
            <AliceCarousel
                items={carousel}
                responsive={responsive}
                disableDotsControls={true}
            />
        </>
    )
}

export default CarouselPost
