interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    toke?: string | null;
}

export default UserLogin;