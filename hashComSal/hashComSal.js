import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');
    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha) {
        if(nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex')
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if(hashesCorrespondem) {
                console.log('usuario autenticado com sucesso')
                return true
            }
        }
        console.log('usuario ou senha incorretos')
        return false
    }
}

const br = new Usuario('Bruna', 'minhaSenha')
console.log(br)

br.autentica('bruna','minhasenha') //teste de nome errado
br.autentica('Bruna', 'minhasenha') //teste de senha errada
br.autentica('Bruna', 'minhaSenha') //teste de sucesso

//Por ser aleatório e modificar toda e qualquer senha, 
//o “sal” na função de hash faz com que senhas iguais tenham hashes diferentes, 
//fazendo com que atacantes não consigam realizar o ataque de rainbow table 
//por não identificar senhas a partir de hashes gerados, 
//pois toda senha terá um hash diferente. Isso dificulta muito o ataque por fazer com que os atacantes tenham que adivinhar não mais apenas a senha, como também o “sal” utilizado para gerar a hash da senha, acarretando em infinitas combinações extremamente difíceis de serem acertadas.