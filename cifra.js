

const mensagemSecreta = 'minhamensagemsecreta'
const movimentos = 3

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + movimentos)
    })
    return mensagemCifrada.join('')
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, movimentos)
console.log(mensagemCifrada)

function decifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere - movimentos)
    })
    return mensagemCifrada.join('')
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, movimentos)
console.log(mensagemDecifrada)