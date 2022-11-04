import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>

      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form action="">
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2" >Cadastrar</Typography>

            <TextField id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
            <TextField id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
            <TextField id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
            <TextField id="confirmarSenha" label="Confirmar Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />

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
