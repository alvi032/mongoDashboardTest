const Random = require('../models/random')

const sample = new Random({
    name: 'Heading',
    defination: 'This will be the text input',
    count: '3'
})
sample.save((err)=>{
    if(err) throw err
    console.log('User saved successfully')
})