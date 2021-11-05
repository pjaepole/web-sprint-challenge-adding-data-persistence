// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources(){
    const result = await db('resources')
    return result
}

async function getResourceById(resource_id) {
    const result = await db('resources').where('resource_id', resource_id).first()
    return result
  }
async function insertResource(resource){
    const [resource_id] = await db('resources').insert(resource)
    const foundResource = await getResourceById(resource_id)
    return foundResource
}
module.exports ={
    getResources,
    insertResource
}