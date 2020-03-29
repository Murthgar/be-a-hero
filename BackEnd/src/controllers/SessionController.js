const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        

        const ong = await connection('ongs')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }
        /*if(!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }*/

        return response.json(ong);
    }
}