import { generateKeyPairSync } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

import { publicEncrypt, privateDecrypt } from 'crypto'

// Encriptação

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
);

// --------Transmissão---------------
const dadosDesencriptados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados:${dadosDecifrados.toString('utf-8')}`)