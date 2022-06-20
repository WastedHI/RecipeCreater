require('./database')
const Category = require('./Category')

async function insertDummyData(){

    try {
        await Category.insertMany([
            {
                "name": "Brownies",
                "image": "brownies.jpg"
            },
            {
                "name": "Cake",
                "image": "cake.jpg"
            },
            {
                "name": "Steak",
                "image": "steak.jpg"
            },
            {
                "name": "Eggs",
                "image": "eggs.jpg"
            }

        ])
    } catch (error) {
        console.log('err', +error)

    }
}