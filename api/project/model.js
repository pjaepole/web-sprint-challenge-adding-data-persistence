// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const result = await db('projects')
    return result
}

module.exports ={
    getProjects
}
