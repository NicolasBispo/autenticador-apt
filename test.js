(async function(){
    const database = require('./src/models/Database')

    await database.sync()
})()