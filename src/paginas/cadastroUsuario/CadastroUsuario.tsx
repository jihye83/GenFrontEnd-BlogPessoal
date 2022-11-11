import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { cadastroUsuario } from "../../services/Service";
import User from '../../models/User';
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  // state que vai levar os dados para o backend
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  // state que recebera os dados de retorno do backend (devido a senha que volta criptografada)
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  // função para atualizar o campo de confirmação de senha
  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value)
  }
  // mesma coisa do componente de Login, função que irá atualizar o state junto com o formulário
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if (confirmarSenha == user.senha) {
      // cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      // alert('Usuário cadastrado com sucesso')
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success('Usuário cadastrado com sucesso!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        })
      } catch (error) {
        toast.error('Falha interna ao cadastrar!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        })
      }
    } else {
      toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      })
      setUser({ ...user, senha: '' });
      setConfirmarSenha('');
    }
  }

  // assim que receber o ID de retorno do cadastro do backend, redireciona pro Login.
  useEffect(() => {
    if (userResult.id !== 0) {
      history('/login');
    }
  }, [userResult]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>

      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2" >Cadastrar</Typography>

            <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
            <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
            <TextField value={user.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="foto" label="Url da foto" variant="outlined" name="foto" margin="normal" fullWidth />
            <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
            <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id="confirmarSenha" label="Confirmar Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button className="btnCancelar" variant="contained" color="secondary">
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" variant="contained" color="primary">
                cadastrar
              </Button>

            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
