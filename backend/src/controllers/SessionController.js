const connection = require('../database/connection');

module.exports = { 

    async create (request, response) {

        const { id } = request.body;
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()
            .catch((error) => {
                console.log(error);
                response.status(500);
                return null;
            });

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' }); 
        }

        return response.json(ong);

    }

}
