//archivo de barril  
// cuando tenemos varios archivos en un directorio que se usan en la aplicacion
const { getUUID } = require('../pluggins/get_id.pluggin');
const { getAge } = require('../pluggins/get-age.plugin');
//const { http }=require('../pluggins/http-client.pluggin');
const { http }= require('../pluggins/http-client-axios.pluggin')
const buid_logger = require('../pluggins/logger.plugin')

module.exports = {
    getAge,
    getUUID,
    http,
    buid_logger
}