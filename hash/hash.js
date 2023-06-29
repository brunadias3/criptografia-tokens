import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("uma String Qualquer"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const usuario = new Usuario('bruna', 'minhaSenha')

console.log(usuario)

usuario.autentica('bruna', 'minhaSenha')
usuario.autentica('bruna', 'minhasenha')

//MD5 é um dos primeiros algoritmos de criptografia no entanto hackers descobriram como decodificar
//A maioria dos especialistas acha que não é seguro para uso generalizado, pois é muito fácil de ser desmontado.