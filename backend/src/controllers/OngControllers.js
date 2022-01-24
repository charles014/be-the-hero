const crypto = require('crypto');
const connection = require('../database/connection');

module.exports ={
    async create (request, response){
        /**
         * Capturando cada dado em variáveis separadas, evitando que usuário enviado dados desnecessários;
         */
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');   
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({ id });
    },
    
    async list (resquet, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }

};