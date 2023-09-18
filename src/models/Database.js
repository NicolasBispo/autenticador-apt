
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'homebooking',
    'aptUser',
    'root123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log('Conexão estabelescida');
}).catch(err=>{
    console.log('Erro na conexão:', err)
})

module.exports = sequelize;